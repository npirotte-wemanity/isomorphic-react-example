import express from 'express'

const app = express()

app.use('/dist', express.static('dist'))
app.use('/node_modules', express.static('node_modules'))

app.use((req, res) => {
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
      <div id="todo-app"></div>
      <script type="application/javascript" src="dist/app.js"></script>
    </body>
  </html>`

  res.send(HTML)
})

module.exports = app
