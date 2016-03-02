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
                "book": new mongoose.Types.ObjectId,
                read: false,
                own: true
            },
            {
                "book": new mongoose.Types.ObjectId,
                read: true,
                own: true
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
        var shelfData = {
            "name": "Library of DummyUser",
            "content": [
                {
                    "book": new mongoose.Types.ObjectId,
                    read: false,
                    own: true
                }
            ],
            'userId': 'DummyUserID'
        };
        new Shelf(shelfData).save(function (err, shelf) {
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
});