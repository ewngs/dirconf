'use strict';

var merge = require('merge');
var glob = require('glob');
var fs = require('fs');
var path = require('path');

module.exports = function (dirname) {
    var res = {};
    glob.sync(path.join(dirname, '*.js'))
        .map(function (fname) { return require(path.join(process.cwd(), fname)); })
        .forEach(function (obj) { merge.recursive(res, obj); });

    return res;
};
