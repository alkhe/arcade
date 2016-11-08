import flatten from 'lodash.flattendeep'
import { isArray } from './util'

// "first-order node"
// label is a string (Component id)
// meta is a map of attributes
// children are child nodes
// note that a first-order node can still have higher-order children
const fnode = (label, meta, children = []) =>
	({ label, meta, children: flatten(children) })

// "higher-order node"
// label is a function (Component id)
// meta is a map of props
const hnode = (label, meta) => {
	let { children } = meta
	if (children) {
		meta = { ...meta, children: isArray(children) ? flatten(children) : [children] }
	}
	return { label, meta }
}

/*
 * Label : String | Function
 * Meta : { String Any }
 * Content : String | Number
 * Children : [VNode]
 *
 * CNode : (String, Meta, Children)
 * HNode : (Function, Meta)
 *
 * VNode : (Label, Meta) | Content
 *
 * VNode <= CNode
 * (label, meta, children)
 * =>
 * (label, meta)
 *
 * VNode <= HNode
 * (label, meta)
 * =>
 * (label, meta)
 */

export {
	fnode,
	hnode
}
