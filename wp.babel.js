import { resolve } from 'path'

export default {
	entry: resolve('./src/index.js'),
	output: {
		path: resolve('./dist'),
		filename: 'index.js'
	},
	module: {
		loaders: [{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }]
	}
}
