const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    main: PATHS.app + '/index.js',
  },
  output: {
    path: PATHS.build,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.svg$/, loader: 'svg-url-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss', '.css']
  }
};
