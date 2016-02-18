/**
 * Created by lnwf9885 on 18/02/2016.
 */
var express = require('express');

var bookController = require('../controllers/book');
var bookApiRouter = express.Router();

bookApiRouter.route('/books')
    .post(bookController.postBooks)
    .get(bookController.getBooks);

// Create endpoint handlers for /beers/:beer_id
bookApiRouter.route('/books/:book_id')
    .get(bookController.getBook)
    .put(bookController.putBook)
    .delete(bookController.deleteBook);

module.exports = bookApiRouter;