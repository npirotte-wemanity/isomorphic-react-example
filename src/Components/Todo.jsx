import React from 'react'

import TodoActions from '../Actions/TodoActions.js'

import ListItem from 'material-ui/lib/lists/list-item'
import {Checkbox, FlatButton} from 'material-ui/lib'

var Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render () {
    return (
      <ListItem
        onClick={this.handleToggle}
        leftIcon={<Checkbox checked={this.props.todo.isCompleted} />}
        rightIconButton={<FlatButton label='Delete' onClick={this.handleDelete} />}
        primaryText={this.props.todo.label}
        />
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
