const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:'/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
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
  ],
};