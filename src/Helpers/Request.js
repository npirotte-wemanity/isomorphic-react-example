/* global XMLHttpRequest */

// very dirty and no dry, on did't take the time to find a good http library ...

import isServer from './isServer'

var request = {}

function serialize (params) {
  var query = ''
  for (var key in params) {
    query += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
  }

  return query
}

request.get = function (params, cb) {
  if (isServer()) {
    var request = require('request')

    request(params.url, function (error, response, body) {
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

    // Send the proper header information along with the request
    // http.setRequestHeader("Content-length", params.length);
    // http.setRequestHeader("Connection", "close");

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
  if (isServer()) {

  } else {
    var http = new XMLHttpRequest()
    var url = params.url
    var serializedParams = serialize(params.data)
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
  if (isServer()) {

  } else {
    var http = new XMLHttpRequest()
    var url = params.url
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
  if (isServer()) {

  } else {
    var http = new XMLHttpRequest()
    var url = params.url
    var serializedParams = serialize(params.data)
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
