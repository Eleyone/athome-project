/**
 * Created by arnaud on 16/02/16.
 */
var mongoose = require('mongoose');
var _ = require('underscore');

var Schema = mongoose.Schema;

var ShelfSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    content: [
        {
            book: {
                type : ObjectId,
                ref: 'Book',
                required: true,
                unique: true
            },
            read: {
                type: Boolean,
                default: false
            },
            own: {
                type: Boolean,
                default: false
            }
        }
    ]
});

module.exports = mongoose.model('Shelf', ShelfSchema);