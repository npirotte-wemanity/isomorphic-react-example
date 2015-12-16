import React from 'react'
import ReactRouter from 'react-router'
import ReactDom from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import {Router, Route, IndexRoute} from 'react-router'

import TodoListStore from './Stores/TodoStore'

//import Router from './routes.jsx'

import TodoApp from './Components/TodoApp.jsx'
import TodoMain from './Components/TodoMain.jsx'

TodoListStore.fetchData(function (err, data) {
  ReactDom.render((
    <Router history={createBrowserHistory()}>
      <Route path='/' component={TodoApp}>
        <IndexRoute component={TodoMain}/>
        <Route name='All' path='/' component={TodoMain} />
        <Route name='Completed' path='/completed' component={TodoMain} />
        <Route name='Active' path='/active' component={TodoMain} />
      </Route>
    </Router>
  ),
    document.getElementById('todo-app'))
})
