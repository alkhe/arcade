import {
	isContent,
	own,
	getLabel,
	getMeta,
	getChildren
} from './util'

const api = {
	text: string => document.createTextNode(string),
	element: label => document.createElement(label),
	append: (node, element) => node.appendChild(element)
}

const render = fnode => {
	if (isContent(fnode)) return api.text(String(fnode))

	const el = api.element(getLabel(fnode))

	const meta = getMeta(fnode)
	
	for (let k in meta) if (own(meta, k)) {
		el[k] = meta[k]
	}

	const children = getChildren(fnode)

	for (let i = 0; i < children.length; i++) {
		api.append(el, render(children[i]))
	}

	return el
}

export default render
