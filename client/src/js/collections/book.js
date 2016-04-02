var Backbone = require("backbone"),
    BookModel = require("../models/book");

var BookCollection = Backbone.Collection.extend({
    model: BookModel
});

module.exports = BookCollection;