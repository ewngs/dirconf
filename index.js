'use strict';

var merge = require('merge');
var glob = require('glob');
var path = require('path');
var assert = require('assert');

module.exports = function (dirname) {
    var res = {},
        confFound = false;

    assert(typeof dirname === 'string', 'dirname parameter is required!');

    glob.sync(path.join(dirname, '*.js'))
        .map(function (fname) {
            return require(path.join(process.cwd(), fname));
        })
        .forEach(function (obj) {
            merge.recursive(res, obj);
            confFound = true;
        });

    if (!confFound) {
        console.log('Warning: no configuration found in ' + path.normalize(dirname));
    }

    return res;
};
