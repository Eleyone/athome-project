var Model = require("../model");

var ShelfModel = Model.extend({
    urlRoot: "/api/shelfs"
});
module.exports = ShelfModel;