/**
 * Created by arnaud on 18/02/16.
 */
var express = require('express');

var authController = require('../controllers/auth');
var clientController = require('../controllers/client');

var clientOAuthRouter = express.Router();

// Create endpoint handlers for /clients
clientOAuthRouter.route('/clients')
    .post(authController.isAuthenticated, clientController.postClients)
    .get(authController.isAuthenticated, clientController.getClients);

module.exports = clientOAuthRouter;