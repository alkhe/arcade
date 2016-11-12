import { isString, isObject } from './util'

// takes node tree
// tail-call optimization, collapse hnode into fnode
const expand = (node, context) => {
	for (;;) {
		if (!isObject(node)) return node

		const { label, meta } = node

		if (isString(label)) {
			return { label, meta, children: node.children.map(n => expand(n, context)) }
		} else {
			node = label(meta, context)
			continue
		}
	}
}

export default expand
