define([
    'backbone',
    '/models/book'
], function (Backbone, BookfModel) {
    var BookCollection = Backbone.Collection.extend({
        model: BookfModel
    });
    return BookCollection;
});