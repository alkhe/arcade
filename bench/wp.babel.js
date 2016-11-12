import { resolve } from 'path'

const file = process.env.FILE

export default {
	entry: resolve(`./${ file }/index.js`),
	output: {
		filename: `bundle.js`,
		path: resolve(`./${ file }`)
	},
	module: {
		loaders: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }]
	}
}
