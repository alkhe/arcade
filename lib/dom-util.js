'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var isDataAttribute = function isDataAttribute(s) {
	return s.startsWith('data-');
};

var getDataString = function getDataString(s) {
	return kebabToCamel(s.substring(5));
};

var kebabToCamel = function kebabToCamel(s) {
	var words = s.split(/-/);

	var out = words.length > 0 ? words[0] : '';

	for (var i = 1; i < words.length; i++) {
		var word = words[i];
		out += (word[0] || '').toUpperCase() + word.substring(1);
	}

	return out;
};

exports.isDataAttribute = isDataAttribute;
exports.getDataString = getDataString;