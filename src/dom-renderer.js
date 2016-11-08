import {
	isContent,
	own,
	getLabel,
	getMeta,
	getChildren
} from './util'

let api = {
	text: string => document.createTextNode(string),
	element: label => document.createElement(label),
	append: (node, element) => node.appendChild(element)
}

const render = fnode => {
	if (isContent(fnode)) return api.text(String(fnode))

	let el = api.element(getLabel(fnode))

	let meta = getMeta(fnode)
	
	for (let k in meta) if (own(meta, k)) {
		el[k] = meta[k]
	}

	let children = getChildren(fnode)
	let frag = document.createDocumentFragment()

	for (let i = 0; i < children.length; i++) {
		api.append(frag, render(children[i]))
	}

	api.append(el, frag)

	return el
}

export default render
