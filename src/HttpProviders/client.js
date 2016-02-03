/* global XMLHttpRequest */

function serialize (params) {
  var query = ''
  for (var key in params) {
    query += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
  }

  return query
}

var HttpProvider = {}

HttpProvider.get = function (params, cb) {
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

HttpProvider.post = function (params, cb) {
  var url = params.url
  var serializedParams = serialize(params.data)

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

HttpProvider.delete = function (params, cb) {
  var url = params.url
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

HttpProvider.put = function (params, cb) {
  var url = params.url
  var serializedParams = serialize(params.data)

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

export default HttpProvider
