"use strict";

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
var isObject = function isObject(x) {
	return x.constructor === Object;
};
var isContent = function isContent(x) {
	return isString(x) || isNumber(x);
};

var getLabel = function getLabel(x) {
	return x.label;
};
var getMeta = function getMeta(x) {
	return x.meta;
};
var getChildren = function getChildren(x) {
	return x.children;
};

var own = function own(obj, k) {
	return Object.prototype.hasOwnProperty.call(obj, k);
};

exports.exists = exists;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isContent = isContent;
exports.getLabel = getLabel;
exports.getMeta = getMeta;
exports.getChildren = getChildren;
exports.own = own;