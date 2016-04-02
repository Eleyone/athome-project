var Backbone = require("backbone"),
    ShelfModel = require("../models/shelf");

var ShelfCollection = Backbone.Collection.extend({
    model: ShelfModel
});

module.exports = ShelfCollection;