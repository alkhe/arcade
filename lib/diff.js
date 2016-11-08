'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UPD_PROP = exports.DEL_PROP = exports.REPLACE_CHILDREN = exports.PROPS_PATCH = exports.SUBSTITUTION = exports.DELETION = exports.INSERTION = exports.DESCEND_DIFF = exports.diff = undefined;

var _util = require('./util');

var enumerate = function enumerate() {
	var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	return function () {
		return start++;
	};
};
/*
const node_diffs = enumerate()

const INSERTION = node_diffs()
const DELETION = node_diffs()
const SUBSTITUTION = node_diffs()
const PROPS_PATCH = node_diffs()
const REPLACE_CHILDREN = node_diffs()

const prop_diffs = enumerate()

const DEL_PROP = prop_diffs()
const UPD_PROP = prop_diffs()

const descend = (index, diffs) => [DESCEND_DIFF, index, diffs]
const insertion = (index, node) => [INSERTION, index, node]
const deletion = index => [DELETION, index]
const substitution = (index, node) => [SUBSTITUTION, index, node]
const props_patch = (index, patches) => [PROPS_PATCH, index, patches]
const replace_children = (index, nodes) => [REPLACE_CHILDREN, index, nodes]

const upd_prop = (k, new_prop) => [UPD_PROP, k, new_prop]
const del_prop = k => [DEL_PROP, k]
*/

var DESCEND_DIFF = 'DESCEND_DIFF';
var INSERTION = 'INSERTION';
var DELETION = 'DELETION';
var SUBSTITUTION = 'SUBSTITUTION';
var PROPS_PATCH = 'PROPS_PATCH';
var REPLACE_CHILDREN = 'REPLACE_CHILDREN';

var DEL_PROP = 'DEL_PROP';
var UPD_PROP = 'UPD_PROP';

var descend = function descend(index, diffs) {
	return { type: DESCEND_DIFF, index: index, diffs: diffs };
};
var insertion = function insertion(index, node) {
	return { type: INSERTION, index: index, node: node };
};
var deletion = function deletion(index) {
	return { type: DELETION, index: index };
};
var substitution = function substitution(index, node) {
	return { type: SUBSTITUTION, index: index, node: node };
};
var props_patch = function props_patch(index, patches) {
	return { type: PROPS_PATCH, index: index, patches: patches };
};
var replace_children = function replace_children(index, nodes) {
	return { type: REPLACE_CHILDREN, index: index, nodes: nodes };
};

var upd_prop = function upd_prop(k, new_prop) {
	return { type: UPD_PROP, k: k, new_prop: new_prop };
};
var del_prop = function del_prop(k) {
	return { type: DEL_PROP, k: k };
};

var diff_meta = function diff_meta(old_meta, new_meta) {
	var diffs = [];

	// if new_meta does not have a key on old_meta, produce a prop deletion
	for (var k in old_meta) {
		if ((0, _util.own)(old_meta, k)) {
			var old_prop = old_meta[k];
			var new_has_prop = (0, _util.own)(new_meta, k);
			if (!new_has_prop) {
				diffs.push(del_prop(k));
			}
		}
	} // if old_meta does not have a key on new_meta or that prop is outdated, produce a prop update
	for (var _k in new_meta) {
		if ((0, _util.own)(new_meta, _k)) {
			var new_prop = new_meta[_k];
			var old_has_prop = (0, _util.own)(old_meta, _k);
			if (!old_has_prop || old_meta[_k] !== new_prop) {
				diffs.push(upd_prop(_k, new_prop));
			}
		}
	}return diffs;
};

var diff = function diff(old_fnode, new_fnode) {
	var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	// Lemma 1
	// if identical fnodes, no diff required
	// note that this requires immutable data flow
	if (old_fnode === new_fnode) return null;

	// Lemma 2
	// if old or new node are content, substitute
	if ((0, _util.isContent)(old_fnode) || (0, _util.isContent)(new_fnode)) return [substitution(index, new_fnode)];

	// Lemma 3
	// if different labels, invalidate all
	var old_label = (0, _util.getLabel)(old_fnode);
	var new_label = (0, _util.getLabel)(new_fnode);

	if (old_label !== new_label) return [substitution(index, new_fnode)];

	// Lemma 4
	// if same labels, diff props
	var old_meta = (0, _util.getMeta)(old_fnode);
	var new_meta = (0, _util.getMeta)(new_fnode);

	var meta_diff = diff_meta(old_meta, new_meta);

	var diffs = meta_diff.length > 0 ? [props_patch(index, meta_diff)] : [];

	// Lemma 5
	// patch old and new for (smaller children.length) times
	// delete rest if old has more children
	// insert rest if new has more children
	var old_children = (0, _util.getChildren)(old_fnode);
	var new_children = (0, _util.getChildren)(new_fnode);
	var old_children_length = old_children.length;
	var new_children_length = new_children.length;

	var diff_len = Math.min(old_children_length, new_children_length);
	var remainder = new_children_length - old_children_length;

	// branching point
	for (var i = 0; i < diff_len; i++) {
		var child_diff = diff(old_children[i], new_children[i], i);
		if ((0, _util.exists)(child_diff)) {
			diffs.push(child_diff);
		}
	}

	if (remainder < 0) {
		// remainder is negative, old has more children
		diffs.push(old_children.slice(diff_len, diff_len - remainder).map(function (_, i) {
			return deletion(i + diff_len);
		}));
	} else if (remainder > 0) {
		// remainder is positive, new has more children
		diffs.push(new_children.slice(diff_len, diff_len + remainder).map(function (node, i) {
			return insertion(i + diff_len, node);
		}));
	}

	return diffs.length > 0 ? descend(index, diffs) : null;
};

exports.diff = diff;
exports.DESCEND_DIFF = DESCEND_DIFF;
exports.INSERTION = INSERTION;
exports.DELETION = DELETION;
exports.SUBSTITUTION = SUBSTITUTION;
exports.PROPS_PATCH = PROPS_PATCH;
exports.REPLACE_CHILDREN = REPLACE_CHILDREN;
exports.DEL_PROP = DEL_PROP;
exports.UPD_PROP = UPD_PROP;