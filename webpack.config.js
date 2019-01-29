const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: path.resolve('./src'),
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: [/\.css$/, /\.scss$/],
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      // { 
      //   test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, 
      //   loader: 'url-loader?limit=100000' 
      // },
      {
        test: /\.(gif|png|jpe?g|svg|pdf)$/i,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'production',
  plugins: [
    // new Dotenv({
    //   path: './.env'
    // }),
    // new webpack.DefinePlugin({
    //   DEBUG: process.env.NODE_ENV !== 'production',
    //       'process.env': {
    //           'NODE_ENV': JSON.stringify(process.env.NODE_ENV || "development"),
    //           'API_KEY': JSON.stringify(process.env.API_KEY)}}),
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      // copys the content of the existing index.html to the new /build index.html
      template:  path.resolve('./dist/index.html'),
    }),
  ],
  optimization: {
    minimize: true
  },
}