'use strict';

var _vnode = require('./vnode');

var _expand = require('./expand');

var _expand2 = _interopRequireDefault(_expand);

var _htmlRenderer = require('./html-renderer');

var _htmlRenderer2 = _interopRequireDefault(_htmlRenderer);

var _diff = require('./diff');

var _html = require('html');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
let Input = attrs => fnode('input', attrs, [])

let List = strings => meta =>
	fnode('ol', meta, strings.map(s => hnode(ListItem, { children: s })))

let ListItem = meta => fnode('li', {}, [meta.children])

let Document = meta => fnode('html', {}, [
	fnode('head', {}, []),
	fnode('body', {}, meta.children)
])

let avt0 = hnode(Document, {
	children: [hnode(List(['asdf', 'ghjkl']), {})]
})

let cvt0 = expand(avt0)

let avt1 = hnode(Document, {
	children: [hnode(List(['sdfj']), { width: 500 })]
})

let cvt1 = expand(avt1)
*/

var List = function List(props) {
	return (0, _vnode.fnode)('ol', {}, props.items.map(function (s) {
		return (0, _vnode.hnode)(ListItem, { children: s });
	}));
};

var ListItem = function ListItem(props) {
	return (0, _vnode.fnode)('li', {}, [props.children]);
};

var avt0 = (0, _vnode.fnode)(List, { items: ['Carlos', 'Raphael', 'Josephine'] });

var cvt0 = (0, _expand2.default)(avt0);

var avt1 = (0, _vnode.fnode)(List, { items: ['Carlos', 'Raphael', 'Josephine', 'Chad'] });

var cvt1 = (0, _expand2.default)(avt1);

console.log((0, _html.prettyPrint)((0, _htmlRenderer2.default)(cvt0)));
console.log();
console.log((0, _html.prettyPrint)((0, _htmlRenderer2.default)(cvt1)));
console.log();

console.dir((0, _diff.diff)(cvt0, cvt1), { depth: null });