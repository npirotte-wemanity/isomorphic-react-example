import React from 'react'
import ReactDom from 'react-dom'
import TodoListStore from './Stores/TodoStore'
import TodoApp from './Components/TodoApp.jsx'

TodoListStore.fetchData(function (err, data) {
  ReactDom.render((
    <TodoApp />
  ),
    document.getElementById('todo-app'))
})
