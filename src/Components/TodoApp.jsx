import React from 'react'
import Reflux from 'reflux'

import TodoListStore from '../Stores/TodoStore.js'

import TodoHeader from './TodoHeader.jsx'
import TodoFooter from './TodoFooter.jsx'
import TodoMain from './TodoMain.jsx'

const TodoApp = React.createClass({

  mixins: [Reflux.connect(TodoListStore, 'list')],

  getInitialState: function () {
    return {
      list: []
    }
  },

  render: function () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <TodoHeader />
              <section className='mdl-layout__content'>
                <TodoMain />
              </section>
            <TodoFooter />
          </div>
        </div>
      </div>
    )
  }
})

export default TodoApp
