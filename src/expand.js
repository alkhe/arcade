import {
	isArray,
	isString,
	getLabel,
	getMeta,
	getChildren,
} from './util'

// takes vnode tree
// tail-call optimization, collapse hnode into fnode
const expand = vnode => {
	for (;;) {
		if (!isArray(vnode)) return vnode

		const label = getLabel(vnode)
		const meta = getMeta(vnode)

		if (isString(label)) {
			return [label, meta, getChildren(vnode).map(expand)]
		} else {
			vnode = label(meta)
			continue
		}
	}
}

export default expand
