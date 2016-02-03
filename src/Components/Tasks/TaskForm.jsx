import React from 'react'
import TaskActionCreator from '../../ActionCreators/TasksActionCreator.js'

class TaskForm extends React.Component {
  constructor () {
    super()

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  render () {
    return (
      <div className="TaskForm-component">
        <form onSubmit={this.onFormSubmit}>
          <input className="form-control" placeholder="Create a new task" />
        </form>
      </div>
    )
  }

  onFormSubmit (evt) {
    evt.preventDefault()
    TaskActionCreator.add('tests')
  }
}

export default TaskForm
