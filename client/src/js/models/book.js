define([
    'model'
], function (Model) {
    return BookModel = Model.extend({
        urlRoot: "/api/books",
        idAttribute: '_id'
    });
});