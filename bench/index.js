import { v, expand, diff } from 'arcade-core'
import render from 'arcade-core/lib/dom-renderer'
import patch from 'arcade-core/lib/dom-patcher'
import raf from 'raf'

const TableCell = ({ text }) => <td className='TableCell' onclick={ e => (console.log(text), e.stopPropagation()) }>{ text }</td>

const TableRow = ({ data: { active, props, id } }) => {
	const className = active ? 'TableRow active' : 'TableRow'

	const children = props.map(c => <TableCell text={ c } />)

	return <tr className={ className }><TableCell text={ '#' + id }></TableCell>{ children }</tr>
}

const Table = ({ data: { items } }) => {
	const children = items.map(i => <TableRow data={ i } />)

	return <table className='Table'><tbody>{ children }</tbody></table>
}

const AnimBox = ({ data: { time } }) => {
	const style = {
		borderRadius: `${ (time % 10).toString() }px`,
		background: `rgba(0,0,0,${ (0.5 + ((time % 10) /10)).toString() })`
	}

	return <div className='AnimBox' style={ style } />
}

const Anim = ({ data: { items } }) => {
	const children = items.map(i => <AnimBox data={ i } />)

	return <div className='Anim'>{ children }</div>
}

const TreeLeaf = ({ data: { id } }) => <li className='TreeLeaf'>{ id }</li>

const TreeNode = ({ data: { children: items } }) => {
	const children = items.map(i => i.container ? <TreeNode data={ i } /> : <TreeLeaf data={ i } />)

	return <ul className='TreeNode'>{ children }</ul>
}

const Tree = ({ data: { root } }) => <div className='Tree'><TreeNode data={ root } /></div>

const Main = ({ data, data: { location } }) => {
	const section =
		location === 'table' ? <Table data={ data.table } /> :
		location === 'anim' ? <Anim data={ data.anim } /> :
		location === 'tree' ? <Tree data={ data.tree } /> :
		null

	return <div className='Main'>{ section }</div>
}

uibench.init('Arcade', '0.1.0')

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root')

	let tree = expand(v('div', {}, []))
	let app

	let patch_buffer = []

	const update = new_tree => {
		patch_buffer.push(diff(tree, expand(new_tree)).diffs)
		tree = new_tree
	}

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

	uibench.run(
		state => update(<Main data={ state } />),
		samples => update(<pre>{ JSON.stringify(samples, null, ' ') }</pre>)
	)
})
