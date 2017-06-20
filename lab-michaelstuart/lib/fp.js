'use strict'

const fp = module.exports = {};

fp.map = (list, callback) => Array.prototype.map.call(list, callback);

fp.filter = (list, callback) => Array.prototype.filter.call(list, callback);

fp.reduce = (list, callback) => Array.prototype.reduce.call(list, callback);

fp.concat = (list, array) => Array.prototype.concat.call(list, array);

fp.splice = (list, index1, index2, index3) => Array.prototype.splice.call(list, index1, index2, index3);
