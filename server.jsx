import express from 'express'
import React from 'react'
import bodyParser from 'body-parser'
import { renderToString } from 'react-dom/server'

import TodoListStore from './src/Stores/TodoStore'

import TodoApp from './src/Components/TodoApp.jsx'

// set request provider
import Request from './src/Helpers/Request'
Request.setServerProvider(require('request'))

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// set dist folder accessible
app.use('/dist', express.static('dist'))
app.use('/node_modules', express.static('node_modules'))

// this part demonstrate how to use stores for enable a broken javascript interface to work properly (we permit creation and deletion)
// this code should be placed in another separate file

/**
* create a task
*/
app.post('/todos', (req, res) => {
  if (req.body.text) {
    TodoListStore.onAddItem(req.body.text, function () {
      res.redirect(req.headers.referrer || req.headers.referer)
    })
  } else {
    res.redirect(req.headers.referrer || req.headers.referer)
  }
})

/**
* create modfified tasks
*/
app.post('/todos/save', (req, res) => {
  var todoKeys = req.body.todo
  var toUpdate = {}

  // construct a key - value object
  todoKeys.forEach(function (todoKey) {
    var originalValue = req.body['todo-' + todoKey + '-original'] == 'true' // eslint-disable-line
    var newValue = req.body['todo-' + todoKey] == 'true' // eslint-disable-line

    if (originalValue !== newValue) {
      toUpdate[todoKey] = newValue
    }
  })

  // we need to fill up the store before update
  TodoListStore.fetchData((err, data) => {
    if (err) {
      console.error(err)
      res.redirect(req.headers.referrer || req.headers.referer)
    }
    TodoListStore.updateBach(toUpdate, function () {
      res.redirect(req.headers.referrer || req.headers.referer)
    })
  })
})

/**
* delete a task
*/
app.get('/todos/:id/delete', (req, res) => {
  var todoKey = req.params.id
  TodoListStore.onRemoveItem(todoKey, function () {
    res.redirect(req.headers.referrer || req.headers.referer)
  })
})

// handle all other requests
app.use((req, res) => {
  console.log(req.url)
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
      <TodoApp />
    )

    const componentHTML = renderToString(InitialComponent)
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
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
