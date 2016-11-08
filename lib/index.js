'use strict';

var _vnode = require('./vnode');

var _expand = require('./expand');

var _expand2 = _interopRequireDefault(_expand);

var _htmlRenderer = require('./html-renderer');

var _htmlRenderer2 = _interopRequireDefault(_htmlRenderer);

var _diff = require('./diff');

var _html = require('html');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var avt0 = (0, _vnode.hnode)(Document, {
	children: [(0, _vnode.hnode)(List(['asdf', 'ghjkl']), {})]
});

var cvt0 = (0, _expand2.default)(avt0);

var avt1 = (0, _vnode.hnode)(Document, {
	children: [(0, _vnode.hnode)(List(['sdfj']), { width: 500 })]
});

var cvt1 = (0, _expand2.default)(avt1);

console.log((0, _html.prettyPrint)((0, _htmlRenderer2.default)(cvt0)));
console.log();
console.log((0, _html.prettyPrint)((0, _htmlRenderer2.default)(cvt1)));
console.log();

console.dir((0, _diff.diff)(cvt0, cvt1), { depth: null });