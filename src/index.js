import { fnode, hnode } from './vnode'
import expand from './expand'
import render from './html-renderer'
import { diff } from './diff'

import { prettyPrint as html } from 'html'

let Input = attrs => fnode('input', attrs, [])

let List = strings => meta =>
	fnode('ol', meta, strings.map(s => hnode(ListItem, { children: s })))

let ListItem = meta => fnode('li', {}, [meta.children])

let Document = meta => fnode('html', {}, [
	fnode('head', {}, []),
	fnode('body', {}, meta.children)
])

let avt0 = hnode(Document, {
	children: [hnode(List(['asdf', 'ghjkl']), {})]
})

let cvt0 = expand(avt0)

let avt1 = hnode(Document, {
	children: [hnode(List(['sdfj']), { width: 500 })]
})

let cvt1 = expand(avt1)

console.log(html(render(cvt0)))
console.log()
console.log(html(render(cvt1)))
console.log()

console.dir(diff(cvt0, cvt1), { depth: null })
