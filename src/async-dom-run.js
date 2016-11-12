import expand from './expand'
import diff from './diff'
import render from './dom-renderer'
import patch from './dom-patcher'
import raf from 'raf'

const run = (root, component) => {
	let patch_buffer = []
	let tree

	const tick = () => {
		patch(root, patch_buffer)
		patch_buffer = []
		raf(tick)
	}

	raf(tick)

	return (meta, context) => {
		const new_tree = expand({
			label: component,
			meta
		}, context)

		const d = diff(tree, new_tree)

		if (d !== null) {
			patch_buffer.push(d)
		}

		tree = new_tree
	}
}

export default run
