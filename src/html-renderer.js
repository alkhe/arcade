import {
	isContent,
	getLabel,
	getMeta,
	getChildren
} from './util'
import { isVoidElement, metaToAttributeString, escapeContent } from './html-util'

// takes fnode tree
const render = fnode => {
	if (isContent(fnode)) return escapeContent(fnode)

	let label = getLabel(fnode)
	let out = `<${ label }${ metaToAttributeString(getMeta(fnode)) }>`
	if (!isVoidElement(label)) {
		out += `${ getChildren(fnode).map(render).join('') }</${ label }>`
	}

	return out
}

export default render
