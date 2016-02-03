import request from 'request'

const HttpProvider = {}

HttpProvider.get = function (params, cb) {
  return http.get(params.url, (res) => {
    console.log(`got response ${res.statusCode}`)
    if (typeof cb === 'function') {
      try {
        //console.log(res)
        cb(null, JSON.parse(res.body))
      } catch (e) {
        console.log(e)
        cb(e)
      }
    }
  }).on('error', (e) => {
    console.log(`server error : ${e.message}`)
    if (typeof cb === 'function') {
      cb(e)
    }
  })
}

export default HttpProvider
