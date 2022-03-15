const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path');
const { option } = require('yargs');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:'/',
  },
  devServer: {
    static: {
      directory: path.resolve('./output.html'),
    },
    compress: true,
    port: 9000,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'simple-pug-loader'
          }
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options:{},
          },
          {
            loader:"css-loader",
            options:{},
          },
          {
            loader:"sass-loader",
            options:{},
          },
        ],
      },
    ],
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.pug',
      filename: 'output.html',
      minify: false,
      inject:true
    }),
    new HtmlWebpackPugPlugin({
      adjustIndent: true
    }),
    new MiniCssExtractPlugin({
      filename:'style.scss',
    }),
  ],
};