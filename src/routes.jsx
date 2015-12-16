import React from 'react'
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import TodoApp from './Components/TodoApp.jsx'
import TodoMain from './Components/TodoMain.jsx'

const AppRouter = () => (
  <div>
    <Router history={createBrowserHistory()}>
      <Route handle={TodoApp}>
        <Route name='All' path='/' handle={TodoMain} />
        <Route name='Completed' path='/completed' handle={TodoMain} />
        <Route name='Active' path='/active' handle={TodoMain} />
      </Route>
    </Router>
  </div>
)

export default AppRouter
