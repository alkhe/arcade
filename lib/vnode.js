'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hnode = exports.fnode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.flattendeep');

var _lodash2 = _interopRequireDefault(_lodash);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// "first-order node"
// label is a string (Component id)
// meta is a map of attributes
// children are child nodes
// note that a first-order node can still have higher-order children
var fnode = function fnode(label, meta) {
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return { label: label, meta: meta, children: (0, _lodash2.default)(children) };
};

// "higher-order node"
// label is a function (Component id)
// meta is a map of props
var hnode = function hnode(label, meta) {
  var _meta = meta,
      children = _meta.children;

  if (children) {
    meta = _extends({}, meta, { children: (0, _util.isArray)(children) ? (0, _lodash2.default)(children) : [children] });
  }
  return { label: label, meta: meta };
};

/*
 * Label : String | Function
 * Meta : { String Any }
 * Content : String | Number
 * Children : [VNode]
 *
 * CNode : (String, Meta, Children)
 * HNode : (Function, Meta)
 *
 * VNode : (Label, Meta) | Content
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