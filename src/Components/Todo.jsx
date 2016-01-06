import React from 'react'

import TodoActions from '../Actions/TodoActions.js'

var Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render () {
    var href = 'todos/' + this.props.todo.key + '/delete'
    var name = 'todo-' + this.props.todo.key
    var originalValueName = name + '-original'
    return (
      <div className='list-group-item'>
        <input type='hidden' name='todo' value={this.props.todo.key} />
        <input type='hidden' name={originalValueName} value={this.props.todo.isCompleted} />
        <a onClick={this.handleDelete} href={href} className='btn btn-danger btn-xs pull-right'>Delete</a>
        <label>
          <input type='checkbox' name={name} checked={this.props.todo.isCompleted} onChange={this.handleToggle} value='true' />
          <span> {this.props.todo.label}</span>
        </label>
      </div>
    )
  },

  handleToggle () {
    TodoActions.toggleItem(this.props.todo.key, !this.props.todo.isCompleted)
  },

  handleDelete (event) {
    TodoActions.removeItem(this.props.todo.key)
    event.preventDefault()
  }
})

export default Todo
