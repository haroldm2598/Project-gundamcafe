const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		menuIndex: './src/menuIndex.js',
		contactIndex: './src/contactIndex.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'dist/index.html',
			chunks: ['main']
		}),
		new HtmlWebpackPlugin({
			filename: 'menu.html',
			template: 'dist/menu.html',
			chunks: ['menu']
		}),
		new HtmlWebpackPlugin({
			filename: 'contact.html',
			template: 'dist/contact.html',
			chunks: ['contact']
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	optimization: {
		runtimeChunk: 'single'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader']
			},
			{
				test: /\.xml$/i,
				use: ['xml-loader']
			}
		]
	}
};
