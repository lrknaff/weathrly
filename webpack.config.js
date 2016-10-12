const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    main: PATHS.app + '/lib/index.js',
    test: "mocha!./test/index.js"
  },
  output: {
    path: PATHS.build,
    filename: "[name].bundle.js"
  },
  plugins: [
  new HtmlWebpackPlugin({
    title: 'React In Theory',
    inject: 'body'
  })
],
  module: {
    loaders: [
      { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.svg$/, loader: 'svg-url-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css', '.jsx']
  }
};
