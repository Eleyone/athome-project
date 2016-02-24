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
        "title": "L'épée de vérité, T5",
        "author": "Goodkind, Terry",
        "resume": "Résumé de test, rempli avec un Lorem Ipsum : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur iaculis mauris, ac dapibus quam suscipit eu. Morbi pretium accumsan arcu, in laoreet eros. Cras pulvinar purus eu fermentum ultrices. Ut lacus nunc, venenatis vitae bibendum congue, finibus hendrerit nunc. Pellentesque sodales nunc ac mollis consequat. Morbi pharetra lorem ipsum, id volutpat urna fringilla quis. Nunc laoreet odio eget feugiat interdum. Sed lobortis sodales massa non malesuada. Nam commodo a quam in porta. Proin gravida lacus orci, sed convallis augue efficitur et. Curabitur feugiat accumsan est id faucibus. Fusce blandit sem non felis tristique, at aliquam nunc tempus. In gravida justo vel metus tristique lacinia. Proin imperdiet aliquet blandit.  Aenean ac tortor lobortis, consequat quam eu, vehicula lorem. Etiam id efficitur elit. Vestibulum eget dictum nibh, ut tincidunt quam. Morbi bibendum egestas eleifend. In venenatis lacus id mi dapibus, id pulvinar ex efficitur. Cras pharetra enim nec lobortis pulvinar. Proin placerat sit amet ante sed hendrerit. Nulla ut enim semper, efficitur diam ut, consequat felis. Donec efficitur ipsum purus, sed consectetur erat vulputate eu. Quisque ac tincidunt elit. Mauris eu facilisis urna. Mauris accumsan lacus ut sem dictum consequat. Morbi cursus libero quis risus consequat luctus nec quis arcu. Nulla lacinia arcu vitae neque bibendum, eget accumsan neque rhoncus. Curabitur malesuada non neque ut congue. Aliquam erat volutpat.",
        "isbn": [
            {
                "id": "2915549621",
                "type": "ISBN10"
            },
            {
                "id": "9782915549621",
                "type": "ISBN13"
            }
        ]
    };

    beforeEach(function (done) {
        //add some test data
        if (!mongoose.connection.db) mongoose.connect(dbUri, done);

        var newBook = new Book(testDataBook);
        newBook.save(function (book) {
            currentBook = book;
            done();
        });
    });
    afterEach(function (done) {
        //delete all the customer records
        Book.remove({}, function () {
            done();
        });
    });
    it("retrieves by ISBN10", function (done) {

        var isbn10 = testDataBook.isbn[0].id;
        var bookTitle = testDataBook.title;

        Book.findByISBN10(isbn10, function (err, book) {
            console.log(err, book);
            book.title.should.equal(bookTitle);
            _.each(book.isbn, function(index){

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