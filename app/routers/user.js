/**
 * Created by lnwf9885 on 18/02/2016.
 */
var userController = require('../controllers/user');
var authController = require('../controllers/auth');

var express = require('express');

var userRouter = express.Router();

// Create endpoint handlers for /users
userRouter.route('/users')
    .post(userController.postUsers)
    .get(authController.isAuthenticated, userController.getUsers);

module.exports = userRouter;