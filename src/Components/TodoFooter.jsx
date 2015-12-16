import React from 'react'
import Reflux from 'reflux'

import TodoListStore from '../Stores/TodoStore.js'

const TodoFooter = React.createClass({

  mixins: [Reflux.connect(TodoListStore, 'list')],

  getInitialState: function () {
    return {
      list: TodoListStore.list
    }
  },

  render: function () {
    var nbrTotal = this.state.list.length
    var nbrComplete = this.state.list.filter((todo) => { return todo.isCompleted }).length
    var nbrIncomplete = nbrTotal - nbrComplete

    var itemLeftLabel = nbrIncomplete === 1 ? ' item left' : ' items left'
    return (
      <footer id='footer'>
        <span>
          <strong>{nbrIncomplete}</strong> {itemLeftLabel}
        </span>
      </footer>
    )
  }
})

export default TodoFooter
