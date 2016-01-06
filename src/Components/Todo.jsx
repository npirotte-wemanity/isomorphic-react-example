import React from 'react'

import TodoActions from '../Actions/TodoActions.js'

var Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render () {
    var href = 'todos/' + this.props.todo.key + '/delete'
    return (
      <div className='list-group-item'>
        <a onClick={this.handleDelete} href={href} className='btn btn-danger btn-xs pull-right'>Delete</a>
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
    event.preventDefault()
  }
})

export default Todo
