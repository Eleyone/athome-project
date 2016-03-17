define([
    'backbone'
], function (Backbone) {
    var UserModel = Backbone.extend({
        urlRoot: "/api/users",
        idAttribute: '_id'
    });
    return UserModel;
});