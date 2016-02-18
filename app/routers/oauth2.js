/**
 * Created by arnaud on 18/02/16.
 */
var oauth2Controller = require('../controllers/oauth2');
var authController = require('../controllers/auth');

var express = require('express');

var oauth2Router = express.Router();

// Create endpoint handlers for oauth2 authorize
oauth2Router.route('/oauth2/authorize')
    .get(authController.isAuthenticated, oauth2Controller.authorization)
    .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
oauth2Router.route('/oauth2/token')
    .post(authController.isClientAuthenticated, oauth2Controller.token);

module.exports = oauth2Router;