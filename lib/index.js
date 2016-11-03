'use strict';

var _vnode = require('./vnode');

var _htmlRenderer = require('./html-renderer');

var Input = function Input(attrs) {
	return (0, _vnode.fnode)('input', attrs, []);
};

var List = function List(strings) {
	return function (meta) {
		return (0, _vnode.fnode)('ol', meta, strings.map(function (s) {
			return (0, _vnode.hnode)(ListItem, { children: s });
		}));
	};
};

var ListItem = function ListItem(meta) {
	return (0, _vnode.fnode)('li', {}, [meta.children]);
};

var Document = function Document(meta) {
	return (0, _vnode.fnode)('html', {}, [(0, _vnode.fnode)('head', {}, []), (0, _vnode.fnode)('body', {}, meta.children)]);
};

var avt = (0, _vnode.hnode)(Document, {
	children: [(0, _vnode.hnode)(List(['asdf', 'ghjkl']), {})]
});

var cvt = (0, _htmlRenderer.expand)(avt);

console.log((0, _htmlRenderer.render)(cvt));