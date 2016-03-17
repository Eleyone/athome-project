define([
    'backbone',
    '/models/shelf'
], function (Backbone, ShelfModel) {
    var ShelfCollection = Backbone.Collection.extend({
        model: ShelfModel
    });
    return ShelfCollection;
});