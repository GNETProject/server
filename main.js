"use strict";

var configIndex = require('./configs/__index.json');

var webConfig = findConfig("web");

var Web = require("./web.js");

if (webConfig.entry.enabled) {
    new Web(webConfig);
}

function findConfig(name) {
    var x = configIndex.find(c => c.name === name);
    return { "entry": x, "config": require("./configs/" + x.path) };
}