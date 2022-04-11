const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { type } = require('os');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
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
        test:/fonts.*\.(woff|woff2|ttf)$/i,
        type:'asset/resource',
        generator:{
          filename:'assets/fonts/[name]_[hash][ext]',
        },
      },

    ],
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!pug-loader!./src/index.pug',
    }),
    new MiniCssExtractPlugin({
      filename:'[name].min.css',
    }),
  ],
};