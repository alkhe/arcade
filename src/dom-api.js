import { own } from './util'
import { isDataAttribute, getDataString } from './dom-util'

export default {
	text: string => document.createTextNode(string),
	element: label => document.createElement(label),
	append: (node, element) => node.appendChild(element),
	insertBefore: (node, ref, element) => node.insertBefore(ref, element),
	remove: (node, element) => node.removeChild(element),
	replace: (node, ref, element) => node.replaceChild(element, ref),
	setProperty: (node, key, prop) => {
		if (isDataAttribute(key)) {
			node.dataset[getDataString(key)] = prop
		} else if (key === 'style') {
			let { style } = node
			for (let k in prop) if (own(prop, k)) {
				style[k] = prop[k]
			}
		} else {
			node[key] = prop
		}
	},
	deleteProperty: (node, key) => {
		if (isDataAttribute(key)) {
			delete node.dataset[getDataString(key)]
		} else if (key === 'style') {
			let { style } = node
			for (let k in prop) if (own(prop, k)) {
				delete style[k]
			}
		} else {
			delete node[key]
		}
	}
}
