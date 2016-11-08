import expand from '../src/expand'
import render from '../src/dom-renderer'
import { diff } from '../src/diff'
import patch from '../src/dom-patcher'
import { fnode, hnode } from '../src/vnode'

let List = ({ items }) => (
	<ol>
		{ items.map(s => <ListItem>{ s }</ListItem>) }
	</ol>
)

let ListItem = ({ children }) => <li>{ children }</li>

let step = () => patch(app, diff(cvt0, cvt1).diffs)

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
