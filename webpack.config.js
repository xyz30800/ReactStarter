const path = require('path');

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
           presets: ['es2015', 'react']
        }
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, // creates style nodes from JS strings
          { loader: 'css-loader' }, // translates CSS into CommonJS
          { loader: 'sass-loader' } // compiles Sass to CSS
        ] 
      }
    ]
  }
};