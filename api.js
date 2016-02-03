var express = require('express')
var bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

var id = 0

var tasks = []

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT")
  next()
})

server.get('/tasks', function (req, res) {
  console.log(tasks)
  res.send(JSON.stringify(tasks))
})

server.post('/tasks', function (req, res) {
  task = req.body;
  task.id = ++id
  task.createdOn = new Date()
  task.modifiedOn = new Date()
  tasks.unshift(task)
  res.send(task)
})

server.delete('/tasks/:taskId', function (req, res) {
  tasks = tasks.filter(function (task) {
    return task.id != req.params.taskId
  })
  res.send()
})

server.put('/tasks/:taskId', function (req, res) {
  tasks = tasks.map(function (task) {
    if (task.id == req.params.taskId) {
      task.isCompleted = req.body.isCompleted == 'true'
      task.modifiedOn = new Date()
    }
    return task
  })
  res.send()
})

const PORT = process.env.PORT || 4000

server.listen(PORT, function () {
  console.log('Server listening on', PORT)
})
