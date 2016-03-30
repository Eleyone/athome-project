var Backbone = require('backbone'),
    UserModel = require('../models/user');

module.exports = UserCollection = Backbone.Collection.extend({
    model: UserModel
});