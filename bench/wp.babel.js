import { resolve } from 'path'

const file = process.env.FILE

export default {
	entry: resolve(`./${ file }.js`),
	output: {
		filename: `bundle.${ file }.js`,
		path: resolve('.')
	},
	module: {
		loaders: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }]
	}
}
