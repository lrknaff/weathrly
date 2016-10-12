const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
  plugins: [
     new HtmlWebpackPlugin({
       template: PATHS.build + '/index.html',
       title: 'React In Theory',
       inject: 'body'
     })
   ],

  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss', '.css']
  }
};
