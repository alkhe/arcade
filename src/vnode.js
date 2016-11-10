import flatten from 'lodash.flattendeep'
import { exists, own, isString, isArray } from './util'

const normalize = children => isArray(children) ? flatten(children) : [children]

const vnode = (label, meta, children) => {
	if (isString(label)) {
		return { label, meta, children: exists(children) ? normalize(children) : [] }
	} else {
		if (exists(children)) {
			meta = { ...meta, children: normalize(children) }
		} else if (own(meta, 'children')) {
			meta = { ...meta, children: normalize(meta.children) }
		}
		return { label, meta }
	}
}

export default vnode
