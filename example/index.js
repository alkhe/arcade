import expand from '../src/expand'
import render from '../src/dom-renderer'
import { diff } from '../src/diff'
import patch from '../src/dom-patcher'
import { fnode, hnode } from '../src/vnode'

/* jsx
List = props => {
	let items = props.items.map(i => <ListItem>{ i }</ListItem)
	return <ol>{ items }</ol>
}

ListItem = props => (
	<li>
		{ props.children }
	</li>
)
*/

let List = props =>
	fnode('ol', {}, props.items.map(s => hnode(ListItem, { children: s })))

let ListItem = props => fnode('li', {}, [props.children])

let step = () => patch(app, diff(cvt0, cvt1).diffs)
// let step = () => console.log('asd')

let avt0 = (
	<div onclick={ step }>
		<List items={ ['Carlos', 'Raphael', 'Josephine'] } />
	</div>
)

let cvt0 = expand(avt0)

let avt1 = (
	<div onclick={ step }>
		<List items={ ['Carlos', 'Raphael', 'Josephine', 'Chad'] } />
	</div>
)

let cvt1 = expand(avt1)

let root = document.getElementById('root')
let app = render(cvt0)

root.appendChild(app)
