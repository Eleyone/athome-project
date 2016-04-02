var Model = require("../model");

var BookModel = Model.extend({
    urlRoot: "/api/books"
});

module.exports = BookModel;