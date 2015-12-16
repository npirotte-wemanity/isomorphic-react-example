import React from 'react'
import Reflux from 'reflux'
import {State} from 'react-router'

import TodoListStore from '../Stores/TodoStore.js'

import List from 'material-ui/lib/lists/list'
import Todo from './Todo.jsx'

const TodoMain = React.createClass({

  mixins: [State, Reflux.connect(TodoListStore, 'list')],

  contextTypes: {
    route: React.PropTypes.object
  },

  getInitialState: function () {
    return {
      list: TodoListStore.list
    }
  },

  render () {
    return (
      <section id='main'>
        <List>
          {this.state.list.map((todo) => {
            return <Todo todo={todo} key={todo.key} />
          })}
        </List>
      </section>
    )
  }
})

export default TodoMain
