/**
 * Created by lnwf9885 on 18/02/2016.
 */
var express = require('express');

var bookController = require('../controllers/book');
var authController = require('../controllers/auth');

var bookApiRouter = express.Router();

bookApiRouter.route('/books')
    .post(authController.isAuthenticated, bookController.postBooks)
    .get(authController.isAuthenticated, bookController.getBooks);

// Create endpoint handlers for /beers/:beer_id
bookApiRouter.route('/books/:book_id')
    .get(authController.isAuthenticated, bookController.getBook)
    .put(authController.isAuthenticated, bookController.putBook)
    .delete(authController.isAuthenticated, bookController.deleteBook);

module.exports = bookApiRouter;