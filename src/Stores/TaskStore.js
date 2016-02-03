import Immutable from 'immutable'

import BaseStore from './BaseStore'
import Dispatcher from '../Dispatcher/Dispatcher.js'

import HttpProvider from '../HttpProviders/client.js'

import TaskDeleteAction from '../Actions/Tasks/TaskDeleteAction.js'
import TaskAddAction from '../Actions/Tasks/TaskAddAction'
import TaskToggleAction from '../Actions/Tasks/TaskToggleAction'
import TaskSyncAction from '../Actions/Tasks/TaskSyncAction'

const ENDPOINT = 'http://localhost:4000/tasks'

function getNextId (items) {
  var highter = items.sort((prev, next) => prev.get('id') < next.get('id')).first()
  return highter ? highter.get('id') + 1 : 1
}

class TaskStore extends BaseStore {
  constructor () {
    super()
    this.tasks = []
    this.tasks = Immutable.List()

    Dispatcher.register((action) => this.processAction(action))
  }
  /**
  * Sync data with the server
  */
  sync (cb) {
    HttpProvider.get({url: ENDPOINT}, (err, data) => {
      if (err) {
        return
      } else {
        this.tasks = Immutable.fromJS(data)
        if (typeof cb === 'function') {
          cb()
        }
      }
    })
  }
  /**
  * get store data
  */
  get () {
    return this.tasks
  }
  /**
  * handle add events
  */
  onAdd (description, cb) {
    // create a temp id
    const tempId = getNextId(this.tasks)
    const task = Immutable.fromJS({description: description, id: tempId})
    this.tasks = this.tasks.unshift(task)

    HttpProvider.post({
      url: ENDPOINT,
      method: 'POST',
      type: 'application/x-www-form-urlencoded',
      data: {description: description}
    }, (err, task) => {
      if (err) {
        // Todo: handle error
        return
      }

      this.tasks = this.tasks.map((_task) => {
        // update task according to server response
        if (!_task.id === tempId) {
          _task = task
        }
        return _task
      })

      cb()
    })
  }
  /**
  * handle add events
  */
  onDelete (task, cb) {
    this.tasks = this.tasks.filter(function (_task) {
      return task !== _task
    })

    HttpProvider.delete({
      url: ENDPOINT + '/' + task.get('id')
    }, cb)
  }
  /**
  * handle toggle events
  */
  onToggle (task, cb) {
    task = task.set('isCompleted', !task.get('isCompleted'))
    this.tasks = this.tasks.map(function (_task) {
      return _task.get('id') === task.get('id') ? task : _task
    })

    HttpProvider.put({
      url: ENDPOINT + '/' + task.get('id'),
      data: task.toJS()
    }, function () {
      if (typeof cb === 'function') {
        cb()
      }
    })
  }
  /**
  * Dispatch event in the store
  */
  processAction (action) {
    if (action instanceof TaskDeleteAction) {
      this.onDelete(action.task)
      this.emitChange()
    } else if (action instanceof TaskAddAction) {
      this.onAdd(action.description, this.emitChange.bind(this))
      this.emitChange()
    } else if (action instanceof TaskToggleAction) {
      this.onToggle(action.task)
      this.emitChange()
    } else if (action instanceof TaskSyncAction) {
      this.sync(this.emitChange.bind(this))
    }
  }
}

export default new TaskStore()
