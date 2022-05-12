const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		menuIndex: './src/menuIndex.js'
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
			}
		]
	}
};
