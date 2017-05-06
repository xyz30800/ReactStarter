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
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
           presets: ['es2015', 'react']
        }
      }
    ]
  }
};