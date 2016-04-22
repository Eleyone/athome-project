var Model = require("../model");

var BookModel = Model.extend({
    url: "/api/books"
});

module.exports = BookModel;