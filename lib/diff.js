'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

var _constants = require('./constants');

var descend = function descend(index, diffs) {
	return { type: _constants.DESCEND_DIFF, index: index, diffs: diffs };
};
var insertion = function insertion(index, node) {
	return { type: _constants.INSERTION, index: index, node: node };
};
var deletion = function deletion(index) {
	return { type: _constants.DELETION, index: index };
};
var substitution = function substitution(index, node) {
	return { type: _constants.SUBSTITUTION, index: index, node: node };
};
var props_patch = function props_patch(index, patches) {
	return { type: _constants.PROPS_PATCH, index: index, patches: patches };
};

var upd_prop = function upd_prop(key, prop) {
	return { type: _constants.UPD_PROP, key: key, prop: prop };
};
var del_prop = function del_prop(key) {
	return { type: _constants.DEL_PROP, key: key };
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

	// Rule 0
	// if identical fnodes, no diff required
	// note that this requires immutable data flow
	if (old_fnode === new_fnode) return null;

	// Rule 1
	// if either is null, invalidate all
	if (!(0, _util.exists)(old_fnode)) return insertion(index, new_fnode);
	if (!(0, _util.exists)(new_fnode)) return deletion(index);

	// Rule 2
	// if old or new node are content, substitute
	if ((0, _util.isContent)(old_fnode) || (0, _util.isContent)(new_fnode)) return substitution(index, new_fnode);

	// Rule 3
	// if different labels, invalidate all
	if (old_fnode.label !== new_fnode.label) return substitution(index, new_fnode);

	// Rule 4
	// if same labels, diff props
	var meta_diff = diff_meta(old_fnode.meta, new_fnode.meta);

	var diffs = meta_diff.length > 0 ? [props_patch(index, meta_diff)] : [];

	// Rule 5
	// patch old and new for (smaller children.length) times
	// delete rest if old has more children
	// insert rest if new has more children
	var old_children = old_fnode.children;
	var new_children = new_fnode.children;
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
		old_children.slice(diff_len, diff_len - remainder).map(function (_, i) {
			return deletion(i + diff_len);
		}).forEach(function (x) {
			return diffs.push(x);
		});
	} else if (remainder > 0) {
		// remainder is positive, new has more children
		new_children.slice(diff_len, diff_len + remainder).map(function (node, i) {
			return insertion(i + diff_len, node);
		}).forEach(function (x) {
			return diffs.push(x);
		});
	}

	return diffs.length > 0 ? descend(index, diffs) : null;
};

exports.default = diff;