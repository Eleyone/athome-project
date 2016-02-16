/**
 * Created by arnaud on 16/02/16.
 */
Book = require("./book.js");

module.exports = {
    list: function(callback) {
        Book.find(callback);
    },
    get: function(id, callback) {
        Book.findOne(id, callback);
    },
    create: function(data, callback) {
        var newBook = new Book(data);
        newBook.save(callback);
    },
    update: function(id, data, callback) {

        // Use the Beer model to find a specific beer
        Book.findById(id, function(err, book) {

            // Update the existing book attributes
            book.title = data.title;
            book.author = data.author;
            book.isbn = data.isbn;
            book.resume = data.resume;

            // Save the beer and check for errors
            book.save(callback);
        });
    },
    delete: function(id, callback) {
        Book.findByIdAndRemove(id, callback);
    }
};