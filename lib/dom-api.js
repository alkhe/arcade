"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	text: function text(string) {
		return document.createTextNode(string);
	},
	element: function element(label) {
		return document.createElement(label);
	},
	append: function append(node, element) {
		return node.appendChild(element);
	},
	insertBefore: function insertBefore(node, ref, element) {
		return node.insertBefore(ref, element);
	},
	remove: function remove(node, element) {
		return node.removeChild(element);
	},
	replace: function replace(node, ref, element) {
		return node.replaceChild(element, ref);
	},
	setProperty: function setProperty(node, key, prop) {
		return node[key] = prop;
	}
};