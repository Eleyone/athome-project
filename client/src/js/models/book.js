define([
    'backbone'
], function (Backbone) {
    var BookModel = Backbone.Model.extend({
        urlRoot: "/api/books",
        idAttribute: '_id'
    });
    return BookModel;
});