import React from 'react'

import TaskStore from '../../Stores/TaskStore.js'

class TaskSummary extends React.Component {
  constructor () {
    super()

    this.state = this.getStateFromStores()
  }

  componentDidMount () {
    TaskStore.addListener(this.onChange.bind(this))
  }

  render () {
    const nbrTotal = this.state.tasks.size
    const nbrComplete = this.state.tasks.filter((todo) => { return todo.get('isCompleted') }).size
    return (
      <div>
        {nbrComplete} / {nbrTotal} completed
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

export default TaskSummary
