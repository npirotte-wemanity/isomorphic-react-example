import Dispatcher from '../Dispatcher/Dispatcher.js'

import TaskDeleteAction from '../Actions/Tasks/TaskDeleteAction'
import TaskAddAction from '../Actions/Tasks/TaskAddAction'

class TasksActionCreator {
  delete (task) {
    Dispatcher.dispatch(new TaskDeleteAction(task))
  }

  add (description) {
    Dispatcher.dispatch(new TaskAddAction(description))
  }
}

export default new TasksActionCreator()
