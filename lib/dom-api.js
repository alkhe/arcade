'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteProperty = exports.setProperty = exports.replace = exports.remove = exports.insertBefore = exports.append = exports.element = exports.text = undefined;

var _util = require('./util');

var _domUtil = require('./dom-util');

var text = function text(string) {
	return document.createTextNode(string);
};
var element = function element(label) {
	return document.createElement(label);
};
var append = function append(node, element) {
	return node.appendChild(element);
};
var insertBefore = function insertBefore(node, ref, element) {
	return node.insertBefore(ref, element);
};
var remove = function remove(node, element) {
	return node.removeChild(element);
};
var replace = function replace(node, ref, element) {
	return node.replaceChild(element, ref);
};

var setProperty = function setProperty(node, key, prop) {
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
};

var deleteProperty = function deleteProperty(node, key) {
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
};

exports.text = text;
exports.element = element;
exports.append = append;
exports.insertBefore = insertBefore;
exports.remove = remove;
exports.replace = replace;
exports.setProperty = setProperty;
exports.deleteProperty = deleteProperty;