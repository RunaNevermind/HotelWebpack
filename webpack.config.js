const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { type } = require('os');
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
        loader: 'pug-loader'
      },
      {
				test: /\.(sa|sc|c)ss$/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					'css-loader',
					'sass-loader',
				],
			},
      {
        test:/\.(|svg|jpg|jpeg|png|gif)$/i,
        type:'asset/resource',
        generator:{
          filename:'assets/img/[name]_[hash][ext]',
        },
      },      
      {
        test:/fonts.*\.ttf$/i,
        type:'asset/resource',
        generator:{
          filename:'assets/fonts/[name]_[hash][ext]',
        },
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