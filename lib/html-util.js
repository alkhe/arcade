'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.escapeAttribute = exports.escapeContent = exports.metaToAttributeString = exports.isVoidElement = undefined;

var _util = require('./util');

var charEscape = function charEscape(map) {
	return function (s) {
		var out = '';
		for (var i = 0; i < s.length; i++) {
			var c = s[i];
			out += (0, _util.own)(map, c) ? map[c] : c;
		}
		return out;
	};
};

var escapeContent = charEscape({
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	'\'': '&#039;',
	'\\': '&#x2F;'
});

var escapeAttribute = charEscape({
	'&': '&amp;',
	'"': '&quot;'
});

var voidElements = {
	area: true,
	base: true,
	br: true,
	col: true,
	command: true,
	embed: true,
	hr: true,
	img: true,
	input: true,
	keygen: true,
	link: true,
	meta: true,
	param: true,
	source: true,
	track: true,
	wbr: true
};

var isVoidElement = function isVoidElement(x) {
	return (0, _util.own)(voidElements, x);
};

var metaToAttributeString = function metaToAttributeString(meta) {
	var out = '';
	for (var k in meta) {
		if ((0, _util.own)(meta, k)) {
			out += ' ' + escapeAttribute(k);

			var v = meta[k];
			if ((0, _util.isContent)(v)) {
				out += '="' + escapeAttribute(String(v)) + '"';
			}
		}
	}return out;
};

exports.isVoidElement = isVoidElement;
exports.metaToAttributeString = metaToAttributeString;
exports.escapeContent = escapeContent;
exports.escapeAttribute = escapeAttribute;