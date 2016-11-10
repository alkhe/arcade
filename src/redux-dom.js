import expand from '../src/expand'
import render from '../src/dom-renderer'
import diff from '../src/diff'
import patch from '../src/dom-patcher'
import v from '../src/vnode'
import raf from 'raf'

const connect = (mapStateToProps = () => ({}), mapDispatchToProps = dispatch =>
	({ dispatch })) => Component => (props, context) =>
		v(Component, { ...props, ...mapStateToProps(context.store.getState()), ...mapDispatchToProps(context.store.dispatch) })

const run = (root, Component, store) => {
	let patch_buffer = []

	let tree = expand(v(Component, {}), { store })
	let app

	store.subscribe(state => {
		const new_tree = expand(v(Component, {}), { store })
		patch_buffer.push(diff(tree, new_tree).diffs)
		tree = new_tree
	})

	raf(() => {
		app = render(tree)
		root.appendChild(app)

		raf(tick)
	})

	const tick = () => {
		for (let i = 0; i < patch_buffer.length; i++) {
			patch(app, patch_buffer[i])
		}
		patch_buffer = []

		raf(tick)
	}
}

export {
	connect,
	run
}
