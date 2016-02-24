/**
 * Created by arnaud on 16/02/16.
 */
var mongoose = require('mongoose');
var _ = require('underscore');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: Object,
        required: true
    },
    resume: String,
    userId: {
        type: String,
        required: true
    },
});

BookSchema.static({
    findByISBN10: function (isbn10, callback) {

        var params = {isbn: { $elemMatch: {
            type: "ISBN10",
            id: isbn10
        }}};

        return this.find(params, callback);
    },
    findByISBN13: function (isbn13, callback) {

        var params = {isbn: { $elemMatch: {
            type: "ISBN13",
            id: isbn13
        }}};

        return this.find(params, callback);
    }
});

BookSchema.methods.getISBN10 = function () {

    var isbn = null;
    _.each(this.isbn, function (item) {
        if (item.type == "ISBN10") {
            isbn = item.id;
        }
    });
    return isbn;
};

BookSchema.methods.getISBN13 = function () {

    var isbn = null;
    _.each(this.isbn, function (item) {
        if (item.type == "ISBN13") {
            isbn = item.id;
        }
    });
    return isbn;
};

module.exports = mongoose.model('Book', BookSchema);