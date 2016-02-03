import React from 'react'

import TaskActionCreator from '../../ActionCreators/TasksActionCreator.js'

class Task extends React.Component {
  render () {
    return (
      <div className="Task-component">
        {this.props.task.description}
        <button onClick={this.handleDelete.bind(this)} className="btn btn-default pull-right">Delete</button>
      </div>
    )
  }

  handleDelete (evt) {
    evt.preventDefault()
    TaskActionCreator.delete(this.props.task)
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired
}

export default Task
