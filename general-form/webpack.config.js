var webpack = require('webpack');
var path = require('path')

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src') + "/app/Hello.jsx",
  output: {
    path: path.resolve(__dirname, 'dist') + "/app",
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
          rules: [{
            test: /\.jsx?/,
            include: path.resolve(__dirname,'src'),  
            loader:'babel-loader'
          }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
}
};