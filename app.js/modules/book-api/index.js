/**
 * Created by arnaud on 16/02/16.
 */
var books = require("../books/index.js");

var express = require("express");
var app = module.exports = express(); // we export new express app here!

var router = express.Router();

var booksRoute = router.route('/books');

booksRoute.post(function(req, res) {
    // try to use high-level calls here
    // if you want something complex just create another special module for this
    books.create(req.body, function(err, books) {
        if (err)
            res.send(err); // do something on error
        res.json(books); // return user json if ok
    });
});

booksRoute.get(function(req, res) {
    books.list(function(err, books) {
        if (err)
            res.send(err);
        res.json(books);
    });
});

var bookRoute = router.route('/books/:book_id');

bookRoute.get(function(req, res) {
    books.get(req.params.book_id, function(err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
});

bookRoute.put(function(req, res) {
    books.update(req.params.book_id, req.body, function(err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
});

bookRoute.delete(function(req, res) {
    books.delete(req.params.book_id, function(err) {
        if (err)
            res.send(err);
        res.json({message: 'Book delete'});
    });
});