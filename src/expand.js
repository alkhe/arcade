import {
	isString,
	isObject,
	getLabel,
	getMeta,
	getChildren,
} from './util'
import { fnode } from './vnode'

// takes vnode tree
// tail-call optimization, collapse hnode into fnode
const expand = vnode => {
	for (;;) {
		if (!isObject(vnode)) return vnode

		const label = getLabel(vnode)
		const meta = getMeta(vnode)

		if (isString(label)) {
			return fnode(label, meta, getChildren(vnode).map(expand))
		} else {
			vnode = label(meta)
			continue
		}
	}
}

export default expand
