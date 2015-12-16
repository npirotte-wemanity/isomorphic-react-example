import fs from 'fs'
import express from 'express'

const app = express()

app.use('/dist', express.static('dist'));

app.use((req, res) => {


  // we fill the todo store with an api fietch before rendering


  const HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
        <title>Isomorphic Redux Demo</title>
      </head>
      <body style="margin: 0">
        <div id="todo-app"></div>
        <script type="application/javascript" src="dist/app.js"></script>
      </body>
    </html>`

    res.send(HTML)

})

module.exports = app
