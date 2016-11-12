import expand from '../../src/expand'
import diff from '../../src/diff'
import render from '../../src/dom-renderer'
import patch from '../../src/dom-patcher'

const { init, run } = uibench

const TableCell = text => ({
	label: 'td',
	meta: {
		className: 'TableCell',
		onclick: e => (console.log(text), e.stopPropagation())
	},
	children: [text]
})

const TableRow = ({ active, props, id }) => ({
	label: 'tr',
	meta: {
		className: active ? 'TableRow active' : 'TableRow',
		'data-id': id
	},
	children: [TableCell(`#${ id }`)].concat(props.map(TableCell))
})

const Table = items => ({
	label: 'table',
	meta: {
		className: 'Table'
	},
	children: [{
		label: 'tbody',
		meta: {},
		children: items.map(TableRow)
	}]
})

const AnimBox = ({ id, time }) => ({
	label: 'div',
	meta: {
		className: 'AnimBox',
		'data-id': id,
		style: {
			borderRadius: `${ (time % 10).toString() }px`,
			background: `rgba(0,0,0,${ (0.5 + ((time % 10) /10)).toString() })`
		}
	},
	children: []
})

const Anim = items => ({
	label: 'div',
	meta: {
		className: 'Anim'
	},
	children: items.map(AnimBox)
})

const TreeLeaf = id => ({
	label: 'li',
	meta: {
		className: 'TreeLeaf'
	},
	children: [id]
})

const TreeNode = items => ({
	label: 'ul',
	meta: {
		className: 'TreeNode'
	},
	children: items.map(i => i.container ? TreeNode(i.children) : TreeLeaf(i.id))
})

const Tree = ({ children }) => ({
	label: 'div',
	meta: {
		className: 'Tree'
	},
	children: [TreeNode(children)]
})

const Main = data => {
	let { location } = data
	return {
		label: 'div',
		meta: {
			className: 'Main'
		},
		children: [
			location === 'table' ? Table(data.table.items) :
			location === 'anim' ? Anim(data.anim.items) :
			location === 'tree' ? Tree(data.tree.root) :
			null
		]
	}
}

const Pre = data => ({
	label: 'Pre',
	meta: {},
	children: [data]
})

init('Arcade', '0.1.0')

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root')
	
	let tree = expand({
		label: 'div',
		meta: {},
		children: []
	})
	let app = render(tree)
	root.appendChild(app)

	const update = new_tree => {
		let artifact = expand(new_tree)
		let d = diff(tree, artifact)
		if (d != null) patch(root, [d])
		tree = artifact
	}

	run(
		state => update(Main(state)),
		samples => update(Pre(JSON.stringify(samples, null, ' ')))
	)
})
