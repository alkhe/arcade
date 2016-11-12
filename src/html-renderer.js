import { isContent } from './util'
import { isVoidElement, metaToAttributeString, escapeContent } from './html-util'

// takes node tree
const render = node => {
	if (isContent(node)) return escapeContent(node)

	let { label } = node

	let out = `<${ label }${ metaToAttributeString(node.meta) }>`
	if (!isVoidElement(label)) {
		out += `${ node.children.map(render).join('') }</${ label }>`
	}

	return out
}

export default render
