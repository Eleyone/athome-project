/**
 * Created by lnwf9885 on 18/02/2016.
 */
var express = require('express');

var shelfController = require('../controllers/shelf');
var authController = require('../controllers/auth');

var shelfApiRouter = express.Router();

shelfApiRouter.route('/shelfs')
    .post(authController.isAuthenticated, shelfController.postShelfs)
    .get(authController.isAuthenticated, shelfController.getShelfs);

// Create endpoint handlers for /beers/:beer_id
shelfApiRouter.route('/shelfs/:shelf_id')
    .get(authController.isAuthenticated, shelfController.getShelf)
    .put(authController.isAuthenticated, shelfController.putShelf)
    .delete(authController.isAuthenticated, shelfController.deleteShelf);

module.exports = shelfApiRouter;