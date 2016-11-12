import { isContent, own } from './util'
import { isDataAttribute, getDataString } from './dom-util'
import { text, element, setProperty, append } from './dom-api'

const render = node => {
	if (isContent(node)) return text(String(node))

	const el = element(node.label)

	const { meta } = node
	
	for (let k in meta) if (own(meta, k)) {
		setProperty(el, k, meta[k])
	}

	const { children } = node

	for (let i = 0; i < children.length; i++) {
		append(el, render(children[i]))
	}

	return el
}

export default render
