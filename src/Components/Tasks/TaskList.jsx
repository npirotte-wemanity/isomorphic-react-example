import React from 'react'

import Task from './Task.jsx'

import TaskStore from '../../Stores/TaskStore.js'
import TaskActionCreator from '../../ActionCreators/TasksActionCreator.js'

class TaskList extends React.Component {
  constructor () {
    super()

    this.state = this.getStateFromStores()
  }

  componentDidMount () {
    TaskStore.addListener(this.onChange.bind(this))
    TaskActionCreator.sync()
  }

  render () {
    return (
      <div className='TaskList-component'>
        <h3>Your tasks</h3>
        <div className='list-group'>
          {this.state.tasks.map((task: Object) => <Task task={task} key={task.get('id')} />)}
        </div>
      </div>
    )
  }

  onChange() {
    this.setState(this.getStateFromStores())
  }

  getStateFromStores () {
    return {
      tasks: TaskStore.get()
    }
  }
}

export default TaskList
