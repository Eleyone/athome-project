/**
 * Created by lnwf9885 on 24/02/2016.
 */
var Book = require('../../app/models/book');

var _ = require("underscore");
var should = require('chai').should();

var dbUri = 'mongodb://localhost:27017/athome_test';

var mongoose = require("mongoose");
var dbTest = require('mocha-mongoose')(dbUri);

describe("Book", function () {
    //holds a customer to use in the each test
    var currentBook = null;
    var testDataBook = {
        "title": "L'�p�e de v�rit�, T5",
        "author": "Goodkind, Terry",
        "resume": "R�sum� de test, rempli avec un Lorem Ipsum : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur iaculis mauris, ac dapibus quam suscipit eu. Morbi pretium accumsan arcu, in laoreet eros. Cras pulvinar purus eu fermentum ultrices. Ut lacus nunc, venenatis vitae bibendum congue, finibus hendrerit nunc. Pellentesque sodales nunc ac mollis consequat. Morbi pharetra lorem ipsum, id volutpat urna fringilla quis. Nunc laoreet odio eget feugiat interdum. Sed lobortis sodales massa non malesuada. Nam commodo a quam in porta. Proin gravida lacus orci, sed convallis augue efficitur et. Curabitur feugiat accumsan est id faucibus. Fusce blandit sem non felis tristique, at aliquam nunc tempus. In gravida justo vel metus tristique lacinia. Proin imperdiet aliquet blandit.  Aenean ac tortor lobortis, consequat quam eu, vehicula lorem. Etiam id efficitur elit. Vestibulum eget dictum nibh, ut tincidunt quam. Morbi bibendum egestas eleifend. In venenatis lacus id mi dapibus, id pulvinar ex efficitur. Cras pharetra enim nec lobortis pulvinar. Proin placerat sit amet ante sed hendrerit. Nulla ut enim semper, efficitur diam ut, consequat felis. Donec efficitur ipsum purus, sed consectetur erat vulputate eu. Quisque ac tincidunt elit. Mauris eu facilisis urna. Mauris accumsan lacus ut sem dictum consequat. Morbi cursus libero quis risus consequat luctus nec quis arcu. Nulla lacinia arcu vitae neque bibendum, eget accumsan neque rhoncus. Curabitur malesuada non neque ut congue. Aliquam erat volutpat.",
        "isbn": [
            {
                "id": "2915549621",
                "type": "ISBN10"
            },
            {
                "id": "9782915549621",
                "type": "ISBN13"
            }
        ],
        'userId': 'DummyUserID'
    };

    before(function(done) {
        //add some test data
        if (mongoose.connection.db) return done();

        mongoose.connect(dbUri, done);
    });

    beforeEach(function (done) {
        new Book(testDataBook).save(function (err, book) {
            if (err) return done(err);
            done();
        });
    });

    after(function (done) {
        Book.remove(done);
    });

    it("can be saved", function(done){

        testDataBook.isbn = [
            {
                "type": "ISBN10",
                "id": "291437058X"
            },
            {
                "type": "ISBN13",
                "id": "9782914370585"
            }
        ];

        new Book(testDataBook).save(function (err, book) {
            if (err) return done(err);
            currentBook = book;
            done();
        });
    });

    it("can be listed", function(done){
        Book.find({}, function(err, books){
            if (err) return done(err);

            // without clearing the DB between specs, this would be 3
            books.length.should.equal(3);
            done();
        });
    });

    /*
    it("can be updated", function(done){
        currentBook.update(function (err, book) {
            if (err) return done(err);
            currentBook = book;
            done();
        });
    });
    */

    it("can get IBSN10", function(done){
        var isbn10 = currentBook.getISBN10();
        testDataBook.isbn[0].id.should.equals(isbn10);
    });

    it("can get IBSN13", function(done){
        var isbn13 = currentBook.getISBN10();
        testDataBook.isbn[1].id.should.equals(isbn13);
    });

    /*
    it("can be removed", function(done){
        new Book(testDataBook).save(function (err, book) {
            if (err) return done(err);
            currentBook = book;
            done();
        });
    });
    */

    it("retrieves by ISBN10", function (done) {

        var isbn10 = testDataBook.isbn[0].id;
        var bookTitle = testDataBook.title;

        Book.findByISBN10(isbn10, function (err, book) {

            book.length.should.equal(1);

            book[0].title.should.equal(bookTitle);

            _.each(book[0].isbn, function(index){

                console.log(arguments);
                var isbnObject = this[index];
                if (isbnObject.type == "ISBN10") {
                    isbnObject.id.should.equal(isbn10);
                }
            });
            done();
        });
    });

    it("retrieves by ISBN13", function (done) {

        var isbn13 = testDataBook.isbn[1].id;
        var bookTitle = testDataBook.title;

        Book.findByISBN13(isbn13, function (err, book) {
            book.title.should.equal(bookTitle);
            _.each(book.isbn, function(index){
                var isbnObject = this[index];
                if (isbnObject.type == "ISBN13") {
                    isbnObject.id.should.equal(isbn13);
                }
            });
            done();
        });
    });
});