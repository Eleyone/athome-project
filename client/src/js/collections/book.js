define([
    'backbone',
    '/models/book'
], function (Backbone, BookModel) {
    return BookCollection = Backbone.Collection.extend({
        model: BookModel,
        urlRoot: '/api/book'
    });
});