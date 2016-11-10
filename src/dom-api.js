export default {
	text: string => document.createTextNode(string),
	element: label => document.createElement(label),
	append: (node, element) => node.appendChild(element),
	insertBefore: (node, ref, element) => node.insertBefore(ref, element),
	remove: (node, element) => node.removeChild(element),
	replace: (node, ref, element) => node.replaceChild(element, ref),
	setProperty: (node, key, prop) => node[key] = prop
}
