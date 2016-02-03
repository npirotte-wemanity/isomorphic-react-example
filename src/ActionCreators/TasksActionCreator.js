import Dispatcher from '../Dispatcher/Dispatcher.js'

import TaskDeleteAction from '../Actions/Tasks/TaskDeleteAction'
import TaskAddAction from '../Actions/Tasks/TaskAddAction'
import TaskToggleAction from '../Actions/Tasks/TaskToggleAction'
import TaskSyncAction from '../Actions/Tasks/TaskSyncAction'

class TasksActionCreator {
  delete (task) {
    Dispatcher.dispatch(new TaskDeleteAction(task))
  }

  add (description) {
    Dispatcher.dispatch(new TaskAddAction(description))
  }

  toggle (task) {
    Dispatcher.dispatch(new TaskToggleAction(task))
  }

  sync () {
    Dispatcher.dispatch(new TaskSyncAction())
  }
}

export default new TasksActionCreator()
