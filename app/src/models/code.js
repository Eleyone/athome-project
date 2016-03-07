/**
 * Created by arnaud on 18/02/16.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Define our token schema
var CodeSchema   = new mongoose.Schema({
    value: { type: String, required: true },
    redirectUri: { type: String, required: true },
    userId: { type: String, required: true },
    clientId: { type: String, required: true }
});

// Export the Mongoose model
module.exports = mongoose.model('Code', CodeSchema);