import { own } from './util'
import { isDataAttribute, getDataString } from './dom-util'

const text = string => document.createTextNode(string)
const element = label => document.createElement(label)
const append = (node, element) => node.appendChild(element)
const insertBefore = (node, ref, element) => node.insertBefore(ref, element)
const remove = (node, element) => node.removeChild(element)
const replace = (node, ref, element) => node.replaceChild(element, ref)

const setProperty = (node, key, prop) => {
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
}

const deleteProperty = (node, key) => {
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

export {
	text,
	element,
	append,
	insertBefore,
	remove,
	replace,
	setProperty,
	deleteProperty
}
