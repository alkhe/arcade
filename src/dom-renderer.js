import { isContent, own } from './util'
import { isDataAttribute, getDataString } from './dom-util'
import api from './dom-api'

const render = node => {
	if (isContent(node)) return api.text(String(node))

	const el = api.element(node.label)

	const { meta } = node
	
	for (let k in meta) if (own(meta, k)) {
		api.setProperty(el, k, meta[k])
	}

	const { children } = node

	for (let i = 0; i < children.length; i++) {
		api.append(el, render(children[i]))
	}

	return el
}

export default render
