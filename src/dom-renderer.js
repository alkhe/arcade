import {
	isContent,
	getLabel,
	getMeta,
	getChildren
} from './util'

let api = {
	text: string => document.createTextNode(string),
	element: label => document.createElement(label)
}

const render = fnode => {
	if (isContent(fnode)) return api.text(String(fnode))

	let el = api.element(getLabel(fnode))

	let children = getChildren(fnode)
	let frag = document.createDocumentFragment()

	for (let i = 0; i < children.length; i++) {
		frag.appendChild(render(children[i]))
	}

	el.appendChild(frag)

	return el
}

export default render
