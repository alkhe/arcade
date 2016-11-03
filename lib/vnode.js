"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// "first-order node"
// label is a string (Component id)
// meta is a map of attributes
// children are child nodes
// note that a first-order node can still have higher-order children
var fnode = function fnode(label, meta) {
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return [label, meta, children];
};

// "higher-order node"
// label is a function (Component id)
// meta is a map of props
var hnode = function hnode(label, meta) {
  return [label, meta];
};

/*
 * Label : String | Function
 * Meta : { String Any }
 * Children : [VNode]
 *
 * CNode : (String, Meta, Children)
 * HNode : (Function, Meta)
 *
 * VNode : (Label, Meta)
 *
 * VNode <= CNode
 * (label, meta, children)
 * =>
 * (label, meta)
 *
 * VNode <= HNode
 * (label, meta)
 * =>
 * (label, meta)
 */

exports.fnode = fnode;
exports.hnode = hnode;