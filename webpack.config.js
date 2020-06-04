// const path = require('path');

// module.exports = {
// 	entry: './src/js/index.js', //location of your main js file
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: 'js/bundle.js' // where js files would be bundled to
// 	}
// };

//===================================================

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
// 	entry: './src/js/index.js',
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: 'js/bundle.js'
// 	},
// 	devServer: {
// 		contentBase: './dist' //where contents are served from
// 	},
// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			filename: 'index.html', // name of html file to be created
// 			template: './src/index.html' // source from which html file would be created
// 		})
// 	]
// };

//======================================================

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/, //using regex to tell babel exactly what files to transcompile
				exclude: /node_modules/, // files to be ignored
				use: {
					loader: 'babel-loader' // specify the loader
				}
			}
		]
	}
};
