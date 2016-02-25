/**
 * Created by lnwf9885 on 18/02/2016.
 */
var Shelf = require("../models/shelf.js");

exports.getShelfs = function (req, res) {
    Shelf.find({ userId: req.user._id }, function (err, books) {
        if (err)
            res.send(err);
        res.json(books);
    });
};

exports.postShelfs = function (req, res) {
    // try to use high-level calls here
    // if you want something complex just create another special module for this

    var data = {
        userId: req.user._id,
        name: req.data.name,
        content: []
    };

    var newShelf = new Shelf(data);
    newShelf.save(function (err, book) {
        if (err)
            res.send(err); // do something on error
        res.json(book); // return user json if ok
    });
};

exports.getShelf = function (req, res) {
    
    Shelf.findOne({ userId: req.user._id, _id: req.params.beer_id }, function (err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
};

exports.putShelf = function (req, res) {
    Shelf.update({ userId: req.user._id, _id: req.params.book_id }, req.body, function (err, num, raw) {
            if (err)
                res.send(err);
            res.json(raw);

    });
};

exports.deleteShelf = function (req, res) {
    Shelf.findByIdAndRemove(req.params.book_id, function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Shelf delete'});
    });
};