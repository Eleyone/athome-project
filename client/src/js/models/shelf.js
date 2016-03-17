define([
    'backbone'
], function (Backbone) {
    var ShelfModel = Backbone.extend({
        urlRoot: "/api/shelfs",
        idAttribute: '_id'
    });
    return ShelfModel;
});