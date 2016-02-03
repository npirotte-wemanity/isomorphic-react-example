/* global XMLHttpRequest */

// very dirty and no dry, on did't take the time to find a good http library ... 

var serverRequestProvider
var request = {}

request.setServerProvider = function (provider) {
  serverRequestProvider = provider
}

function serialize (params) {
  var query = ''
  for (var key in params) {
    query += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
  }

  return query
}

request.get = function (params, cb) {
  if (isServer() && serverRequestProvider) {
    // var request = require('request')

    serverRequestProvider(params.url, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        if (typeof cb === 'function') {
          cb(null, JSON.parse(body))
        }
      }
    })
  } else {
    var http = new XMLHttpRequest()
    var url = params.url
    var serializedParams = serialize(params.data)
    http.open('GET', url, true)

    http.onreadystatechange = function () {// Call a function when the state changes.
      if (http.readyState === 4 && http.status === 200) {
        if (typeof cb === 'function') {
          cb(null, JSON.parse(http.responseText))
        }
      }
    }
    http.send(serializedParams)
  }
}

request.post = function (params, cb) {
  var url = params.url
  var serializedParams = serialize(params.data)

  if (isServer()) {
    serverRequestProvider.post({
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      url: url,
      body: serializedParams
    }, function (err, res, body) {
      if (typeof cb === 'function') {
        cb(null, res)
      }
    })
  } else {
    var http = new XMLHttpRequest()
    http.open('POST', url, true)
    // Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    // http.setRequestHeader("Content-length", params.length);
    // http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function () {// Call a function when the state changes.
      if (http.readyState === 4 && http.status === 200) {
        if (typeof cb === 'function') {
          cb(null, http.responseText)
        }
      }
    }
    http.send(serializedParams)
  }
}

request.delete = function (params, cb) {
  var url = params.url
  if (isServer()) {
    serverRequestProvider.del({
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      url: url,
    }, function (err, res, body) {
      if (typeof cb === 'function') {
        cb(null, res)
      }
    })
  } else {
    var http = new XMLHttpRequest()
    // var params = serialize(params.data)
    http.open('DELETE', url, true)

    // Send the proper header information along with the request
    // http.setRequestHeader("Content-length", params.length);
    // http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function () {// Call a function when the state changes.
      if (http.readyState === 4 && http.status === 200) {
        if (typeof cb === 'function') {
          cb(null, http.responseText)
        }
      }
    }
    http.send()
  }
}

request.put = function (params, cb) {
  var url = params.url
  var serializedParams = serialize(params.data)
  if (isServer()) {
    serverRequestProvider.put({
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      url: url,
      body: serializedParams
    }, function (err, res, body) {
      if (typeof cb === 'function') {
        cb(null, res)
      }
    })
  } else {
    var http = new XMLHttpRequest()
    http.open('PUT', url, true)

    // Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    // http.setRequestHeader("Content-length", params.length);
    // http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function () {// Call a function when the state changes.
      if (http.readyState === 4 && http.status === 200) {
        if (typeof cb === 'function') {
          cb(null, http.responseText)
        }
      }
    }
    http.send(serializedParams)
  }
}

export default request
