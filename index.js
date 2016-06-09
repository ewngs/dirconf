'use strict';

var merge = require('merge');
var glob = require('glob');
var path = require('path');

module.exports = function (dirname) {
    var res = {},
        confFound = false;

    glob.sync(path.join(dirname, '*.js'))
        .map(function (fname) { return require(path.join(process.cwd(), fname)); })
        .forEach(function (obj) {
            merge.recursive(res, obj);
            confFound = true;
        });

    if (!confFound) {
        console.log('Waring: no configuration was found in ' + path.normalize(dirname));
    }

    return res;
};
