/**
 * Created by lnwf9885 on 18/02/2016.
 */
var express = require('express');

var shelfController = require('../controllers/shelf');
var authController = require('../controllers/auth');

var shelfApiRouter = express.Router();

shelfApiRouter.route('/shelfs')
    .post(authController.isAuthenticated, shelfController.postBooks)
    .get(authController.isAuthenticated, shelfController.getBooks);

// Create endpoint handlers for /beers/:beer_id
shelfApiRouter.route('/shelfs/:shelf_id')
    .get(authController.isAuthenticated, shelfController.getBook)
    .put(authController.isAuthenticated, shelfController.putBook)
    .delete(authController.isAuthenticated, shelfController.deleteBook);

module.exports = shelfApiRouter;