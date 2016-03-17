define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    if ("undefined" === typeof Dispatcher) {
        Dispatcher = _.clone(Backbone.Events);
    }
    return Dispatcher;
});