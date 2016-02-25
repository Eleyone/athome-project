/**
 * Created by lnwf9885 on 24/02/2016.
 */
var Shelf = require('../../app/models/shelf');

describe("Shelf", function () {
    //holds a customer to use in the each test
    var currentShelf = null;
    var testDataShelf = {
        "name": "Library of DummyUser",
        "content": [
            {
                "book": "2915549621",
                "type": "ISBN10"
            },
            {
                "book": "9782915549621",
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
        new Shelf(testDataShelf).save(function (err, shelf) {
            if (err) return done(err);
            currentShelf = shelf;
            done();
        });
    });

    afterEach(function (done) {
        Shelf.remove(done);
    });

    it("can be saved", function(done){

        new Shelf(testDataShelf).save(function (err, shelf) {
            if (err) return done(err);
            done();
        });
    });

    it("can be listed", function(done){
        Shelf.find({}, function(err, shelfs){
            if (err) return done(err);

            // without clearing the DB between specs, this would be 3
            shelfs.length.should.equal(1);
            done();
        });
    });

    it("can be updated", function(done){

        var data = [
            {
                "type": "ISBN10",
                "id": "291437058X"
            },
            {
                "type": "ISBN13",
                "id": "9782914370585"
            }
        ];

        Shelf.update(currentShelf._id, {isbn : data}, function (err, num, row) {
            if (err) return done(err);
            done();
        });
    });


    it("can get IBSN10", function(done){
        var isbn10 = currentShelf.getISBN10();
        testDataShelf.isbn[0].id.should.equals(isbn10);
        done();
    });

    it("can get IBSN13", function(done){
        var isbn13 = currentShelf.getISBN13();
        testDataShelf.isbn[1].id.should.equals(isbn13);
        done();
    });

    /*
    it("can be removed", function(done){
        new Shelf(testDataShelf).save(function (err, shelf) {
            if (err) return done(err);
            currentShelf = shelf;
            done();
        });
    });
    */

    it("retrieves by ISBN10", function (done) {

        var isbn10 = testDataShelf.isbn[0].id;
        var shelfTitle = testDataShelf.title;

        Shelf.findByISBN10(isbn10, function (err, shelf) {

            shelf.length.should.equal(1);

            shelf[0].title.should.equal(shelfTitle);

            _.each(shelf[0].isbn, function(item){
                if (item.type == "ISBN10") {
                    item.id.should.equal(isbn10);
                }
            });
            done();
        });
    });

    it("retrieves by ISBN13", function (done) {

        var isbn13 = testDataShelf.isbn[1].id;
        var shelfTitle = testDataShelf.title;

        Shelf.findByISBN13(isbn13, function (err, shelf) {
            shelf.length.should.equal(1);

            shelf[0].title.should.equal(shelfTitle);

            _.each(shelf[0].isbn, function(item){
                if (item.type == "ISBN13") {
                    item.id.should.equal(isbn13);
                }
            });
            done();
        });
    });
});