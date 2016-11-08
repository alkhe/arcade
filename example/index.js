import expand from '../src/expand'
import render from '../src/dom-renderer'
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

let avt = fnode(List, { items: ['Carlos', 'Raphael', 'Josephine'] })

let cvt = expand(avt)

document.getElementById('root').appendChild(render(cvt))
