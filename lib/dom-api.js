'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

var _domUtil = require('./dom-util');

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
		if ((0, _domUtil.isDataAttribute)(key)) {
			node.dataset[(0, _domUtil.getDataString)(key)] = prop;
		} else if (key === 'style') {
			var style = node.style;

			for (var k in prop) {
				if ((0, _util.own)(prop, k)) {
					style[k] = prop[k];
				}
			}
		} else {
			node[key] = prop;
		}
	},
	deleteProperty: function deleteProperty(node, key) {
		if ((0, _domUtil.isDataAttribute)(key)) {
			delete node.dataset[(0, _domUtil.getDataString)(key)];
		} else if (key === 'style') {
			var style = node.style;

			for (var k in prop) {
				if ((0, _util.own)(prop, k)) {
					delete style[k];
				}
			}
		} else {
			delete node[key];
		}
	}
};