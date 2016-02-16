/**
 * Created by arnaud on 16/02/16.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BookSchema   = new Schema({
    title: String,
    author: String,
    isbn: String,
    resume: Text
});

module.exports = mongoose.model('Book', BookSchema);