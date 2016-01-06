import React from 'react'

import TodoActions from '../Actions/TodoActions.js'

var Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render () {
    return (
      <div className='list-group-item'>
        <button onClick={this.handleDelete} className='btn btn-danger btn-xs pull-right'>Delete</button>
        <label>
          <input type='checkbox' checked={this.props.todo.isCompleted} onChange={this.handleToggle} />
          <span> {this.props.todo.label}</span>
        </label>
      </div>
    )
  },

  handleToggle () {
    TodoActions.toggleItem(this.props.todo.key)
  },

  handleDelete (event) {
    TodoActions.removeItem(this.props.todo.key)
    event.stopPropagation()
  }
})

export default Todo
