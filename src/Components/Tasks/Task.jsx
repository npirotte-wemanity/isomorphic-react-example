import React from 'react'

import TaskActionCreator from '../../ActionCreators/TasksActionCreator.js'

class Task extends React.Component {
  render () {
    return (
      <div className='Task-component list-group-item'>
        <label>
          <input type='checkbox' checked={this.props.task.get('isCompleted')} onChange={this.handleToggle.bind(this)} value='true' />
          <span> {this.props.task.get('description')}</span>
        </label>
        <button onClick={this.handleDelete.bind(this)} className="btn btn-default btn-danger btn-xs pull-right">Delete</button>
      </div>
    )
  }

  handleDelete (evt) {
    evt.preventDefault()
    TaskActionCreator.delete(this.props.task)
  }

  handleToggle (evt) {
    TaskActionCreator.toggle(this.props.task)
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired
}

export default Task
