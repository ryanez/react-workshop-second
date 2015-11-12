'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    Container = require('./container');

// designed to be called once document is loaded.
module.exports = function(elementId) {
    var element = global.document.getElementById(elementId);

    ReactDOM.render(<Container />, element);
};