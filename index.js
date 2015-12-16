'use strict';

require('babel-core/register')({
  extensions: [".es6", ".es", ".jsx", ".js"]
});

var server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});
