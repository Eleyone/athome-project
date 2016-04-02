var Backbone = require("backbone"),
    UserModel = require("../models/user");

var UserCollection = Backbone.Collection.extend({
    model: UserModel
});

module.exports = UserCollection;