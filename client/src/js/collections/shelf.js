var Backbone = require('backbone'),
    ShelfModel = require('../models/shelf');

module.exports = ShelfCollection = Backbone.Collection.extend({
    model: ShelfModel
});