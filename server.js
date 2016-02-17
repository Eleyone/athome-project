/**
 * Created by arnaud on 16/02/16.
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;        // set our port
var app = express();                 // define our app using express

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/athome'); // connect to our database

var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function (req, res) {
    res.json({message: 'You are running dangerously low on beer!'});
});
app.use('', router);

var bookApiRouter = express.Router();

var Book = require("./app/models/book.js");

var booksRoute = bookApiRouter.route('/books');

booksRoute.get(function (req, res) {
    Book.find(function (err, books) {
        if (err)
            res.send(err);
        res.json(books);
    });
});

booksRoute.post(function (req, res) {
    // try to use high-level calls here
    // if you want something complex just create another special module for this

    var data = {
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
});

var bookRoute = bookApiRouter.route('/books/:book_id');

bookRoute.get(function (req, res) {
    Book.findOne(req.params.book_id, function (err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
});

bookRoute.put(function (req, res) {
    Book.findById(req.params.book_id, function (err, book) {
        // Update the existing book attributes
        book.title = req.body.title;
        book.author = req.body.author;
        book.isbn = req.body.isbn;
        book.resume = req.body.resume;

        book.save(function (err, book) {
            if (err)
                res.send(err);
            res.json(book);
        });
    });
});

bookRoute.delete(function (req, res) {
    Book.findByIdAndRemove(req.params.book_id, function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Book delete'});
    });
});

app.use('/api', bookApiRouter);
//app.use(require("static-pages"));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);