const path = require('path');
const webpack = require('webpack');

const config: webpack.Configuration = {
  entry: './entry/file1.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }
};

export default config;
