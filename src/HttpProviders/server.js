import request from 'request'

const HttpProvider = {}

HttpProvider.get = function (params, cb) {
  request(params.url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      if (typeof cb === 'function') {
        cb(null, JSON.parse(body))
      }
    }
  })
}

export default HttpProvider
