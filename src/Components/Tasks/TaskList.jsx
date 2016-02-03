import React from 'react'

import Task from './Task.jsx'

import TaskStore from '../../Stores/TaskStore.js'

class TaskList extends React.Component {
  constructor () {
    super()

    this.state = this.getStateFromStores()
  }

  componentDidMount () {
    TaskStore.addListener(this.onChange.bind(this))
  }

  render () {
    return (
      <div className="TaskList-component">
        <h3>Your tasks</h3>
        <div>
          {this.state.tasks.map((task: Object, index: number) => <Task task={task} key={index} />)}
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
