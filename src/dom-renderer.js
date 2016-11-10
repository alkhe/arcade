import {
	isContent,
	own,
	getLabel,
	getMeta,
	getChildren
} from './util'
import api from './dom-api'

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
