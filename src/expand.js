import {
	isString,
	isObject,
	getLabel,
	getMeta,
	getChildren,
} from './util'
import v from './vnode'

// takes vnode tree
// tail-call optimization, collapse hnode into fnode
const expand = (vnode, context) => {
	for (;;) {
		if (!isObject(vnode)) return vnode

		const label = getLabel(vnode)
		const meta = getMeta(vnode)

		if (isString(label)) {
			return v(label, meta, getChildren(vnode).map(vn => expand(vn, context)))
		} else {
			vnode = label(meta, context)
			continue
		}
	}
}

export default expand
