'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function makeWebpackConfig() {
	let config = {};

	config.entry = {
		app: './src/app.bootstrap.js'
	};

	config.output = {
		path: __dirname + '/dist',

		publicPath: 'http://localhost:8080/',

		filename: '[name].bundle.js',

		chunkFilename: '[name].bundle.js'
	};

	config.devtool = 'eval-source-map';

	config.module = {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}, 
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			}, 
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				loader: 'file-loader'
			}, 
			{
				test: /\.html$/,
				loader: 'raw-loader'
			}
		]
	};

	config.plugins = [
		new webpack.LoaderOptionsPlugin({
			test: /\.scss$/i,
			options: {
				postcss: {
					plugins: [autoprefixer]
				}
			}
		})
	];

	config.plugins.push(
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),

		new ExtractTextPlugin({filename: 'css/[name].css', allChunks: true})
	)

	config.devServer = {
		contentBase: './src/dist',
		stats: 'minimal'
	};

	return config;
}();