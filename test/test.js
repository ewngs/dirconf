'use strict';

const test = require('tape');
var conf = require('..')('test/conf');

test('object integrity', function (t) {

    t.equal(typeof conf, 'object', 'conf should be an object');
    t.equal(typeof conf.db, 'object', 'conf.db should exist and it should be an object');
    t.equal(conf.db.host, 'dbhost', 'conf.db.host should be dbhost');
    t.equal(conf.db.name, 'somename', 'conf.db.name should be somename');
    t.ok(Array.isArray(conf.servers), 'conf.servers should be an array');
    t.equal(conf.servers.length, 1, 'conf.servers should contain one element');

    t.end();
});
