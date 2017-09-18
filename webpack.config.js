const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'bundledOutputs'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(re|ml)$/,
        use: {
          loader: 'bs-loader',
          options: {
            module: 'es6',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.re', '.ml', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
};
