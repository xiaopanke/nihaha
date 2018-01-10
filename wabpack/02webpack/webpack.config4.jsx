var path = require('path');
var serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  },
  entry: './entry/file1.js',

};

var clientConfig = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js'
  },
  entry: './entry/file1.js',
};

module.exports = [ serverConfig, clientConfig ];
