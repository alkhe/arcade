import { resolve } from 'path'

export default {
	entry: resolve('./index.js'),
	output: {
		filename: 'bundle.js',
		path: resolve('.')
	},
	module: {
		loaders: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }]
	}
}
