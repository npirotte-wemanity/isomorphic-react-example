import BaseStore from './BaseStore'
import Dispatcher from '../Dispatcher/Dispatcher.js'

import TaskDeleteAction from '../Actions/Tasks/TaskDeleteAction.js'
import TaskAddAction from '../Actions/Tasks/TaskAddAction'

class TaskStore extends BaseStore {
  constructor () {
    super()

    this.tasks = [
      {description: 'A new task'}
    ]

    Dispatcher.register((action) => this.processAction(action))
  }

  get () {
    return this.tasks
  }

  add (description) {
    this.tasks.push({description: description})
  }

  delete (task) {
    this.tasks = this.tasks.filter(function (_task) {
      return task !== _task
    })
  }

  processAction (action) {
    if (action instanceof TaskDeleteAction) {
      this.delete(action.task)
      this.emitChange()
    } else if (action instanceof TaskAddAction) {
      this.add(action.description)
      this.emitChange()
    }
  }
}

export default new TaskStore()
