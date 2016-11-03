import { fnode, hnode } from './vnode'
import { expand, render } from './html-renderer'

let Input = attrs => fnode('input', attrs, [])

let List = strings => meta =>
	fnode('ol', meta, strings.map(s => hnode(ListItem, { children: s })))

let ListItem = meta => fnode('li', {}, [meta.children])

let Document = meta => fnode('html', {}, [
	fnode('head', {}, []),
	fnode('body', {}, meta.children)
])

let avt = hnode(Document, {
	children: [hnode(List(['asdf', 'ghjkl']), {})]
})

let cvt = expand(avt)

console.log(render(cvt))
