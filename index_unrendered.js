'use strict';

require('babel-core/register')({
  extensions: [".es6", ".es", ".jsx", ".js"]
});

var server = require('./server_unrendered.jsx');

const PORT = process.env.PORT || 2000;

server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});
