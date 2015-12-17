import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import { Router, Route, IndexRoute } from 'react-router'
import createMemoryHistory from 'history/lib/createMemoryHistory'

import TodoListStore from './src/Stores/TodoStore'

import TodoMain from './src/Components/TodoMain.jsx'
import TodoApp from './src/Components/TodoApp.jsx'

const app = express()

// set dist folder accessible
app.use('/dist', express.static('dist'))

// handle all other requests
app.use((req, res) => {
  // set user agent for server rendering
  GLOBAL.navigator = {
    userAgent: req.headers['user-agent']
  }

  // we fill the todo store with an api fietch before rendering
  TodoListStore.fetchData((err, data) => {
    if (err) {
      console.log('Can\'t get initial data')
    }

    const InitialComponent = (
      <Router history={createMemoryHistory()}>
        <Route path='/' component={TodoApp}>
          <IndexRoute component={TodoMain}/>
          <Route name='All' path='/' component={TodoMain} />
          <Route name='Completed' path='/completed' component={TodoMain} />
          <Route name='Active' path='/active' component={TodoMain} />
        </Route>
      </Router>
    )

    const componentHTML = renderToString(InitialComponent)
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0">
        <div id="todo-app">${componentHTML}</div>
        <script type="application/javascript" src="dist/app.js"></script>
      </body>
    </html>`

    res.send(HTML)
  })
})

module.exports = app
