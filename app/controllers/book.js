/**
 * Created by lnwf9885 on 18/02/2016.
 */
var Book = require("../models/book.js");

exports.getBooks = function (req, res) {
    Book.find({ userId: req.user._id }, function (err, books) {
        if (err)
            res.send(err);
        res.json(books);
    });
};

exports.postBooks = function (req, res) {
    // try to use high-level calls here
    // if you want something complex just create another special module for this

    var data = {
        userId: req.user._id,
        title: req.body.title,
        author: req.body.author,
        resume: req.body.resume,
        isbn: []
    };
    if (req.body.isbn10) {
        data.isbn.push({type: "ISBN10", id: req.body.isbn10});
    }
    if (req.body.isbn13) {
        data.isbn.push({type: "ISBN13", id: req.body.isbn13});
    }

    var newBook = new Book(data);
    newBook.save(function (err, book) {
        if (err)
            res.send(err); // do something on error
        res.json(book); // return user json if ok
    });
};

exports.getBook = function (req, res) {
    Book.findOne({ userId: req.user._id, _id: req.params.beer_id }, function (err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
};

exports.putBook = function (req, res) {

    // Update the existing book attributes
    var data = {};

    if (req.body.title)
        data.title = req.body.title;

    if (req.body.title)
        data.author = req.body.author;

    if (req.body.resume)
        data.resume = req.body.resume;

    Book.update({ userId: req.user._id, _id: req.params.book_id }, data, function (err, num, raw) {
            if (err)
                res.send(err);
            res.json(raw);

    });
};

exports.deleteBook = function (req, res) {
    Book.findByIdAndRemove(req.params.book_id, function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Book delete'});
    });
};