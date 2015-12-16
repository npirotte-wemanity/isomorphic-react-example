import React from 'react'
import Reflux from 'reflux'
import {RouteContext} from 'react-router'

import TodoListStore from '../Stores/TodoStore.js'

import TodoHeader from './TodoHeader.jsx'
import TodoFooter from './TodoFooter.jsx'
import {Card, CardText} from 'material-ui/lib/card'

const TodoApp = React.createClass({

  mixins: [RouteContext, Reflux.connect(TodoListStore, 'list')],

  getInitialState: function () {
    return {
      list: []
    }
  },

  render: function () {
    return (
      <div>
        <TodoHeader />
        <Card>
          <CardText>
            {this.props.children}
          </CardText>
        <TodoFooter />
        </Card>
      </div>
    )
  }
})

export default TodoApp
