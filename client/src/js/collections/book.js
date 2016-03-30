var Backbone = require('backbone'),
    BookModel = require('../models/book');

module.exports = BookCollection = Backbone.Collection.extend({
    model: BookModel
});