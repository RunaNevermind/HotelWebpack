const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
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
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			}
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