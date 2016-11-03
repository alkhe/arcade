'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var exists = function exists(x) {
	return x != null;
};
var isString = function isString(x) {
	return x.constructor === String;
};
var isNumber = function isNumber(x) {
	return x.constructor === Number;
};
var isBoolean = function isBoolean(x) {
	return x.constructor === Boolean;
};
var isArray = function isArray(x) {
	return x.constructor === Array;
};
var isContent = function isContent(x) {
	return isString(x) || isNumber(x);
};

var getLabel = function getLabel(x) {
	return x[0];
};
var getMeta = function getMeta(x) {
	return x[1];
};
var getChildren = function getChildren(x) {
	return x[2];
};

var own = function own(obj, k) {
	return Object.prototype.hasOwnProperty.call(obj, k);
};

var charEscape = function charEscape(map) {
	return function (s) {
		var out = '';
		for (var i = 0; i < s.length; i++) {
			var c = s[i];
			out += own(map, c) ? map[c] : c;
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
	return own(voidElements, x);
};

var metaToAttributeString = function metaToAttributeString(meta) {
	var out = '';
	for (var k in meta) {
		if (own(meta, k)) {
			out += ' ' + escapeAttribute(k);

			var v = meta[k];
			if (isContent(v)) {
				out += '="' + escapeAttribute(meta[k]) + '"';
			}
		}
	}return out;
};

// takes vnode tree
// tail-call optimization, collapse hnode into fnode
var expand = function expand(vnode) {
	for (;;) {
		if (!isArray(vnode)) return vnode;

		var label = getLabel(vnode);
		var meta = getMeta(vnode);

		if (isString(label)) {
			return [label, meta, getChildren(vnode).map(expand)];
		} else {
			vnode = label(meta);
			continue;
		}
	}
};

// takes fnode tree
var render = function render(fnode) {
	if (isContent(fnode)) return escapeContent(fnode);

	var label = getLabel(fnode);
	var out = '<' + label + metaToAttributeString(getMeta(fnode)) + '>';
	if (!isVoidElement(label)) {
		out += getChildren(fnode).map(render).join('') + '</' + label + '>';
	}

	return out;
};

exports.expand = expand;
exports.render = render;