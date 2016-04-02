var Model = require("../model");

var UserModel = Model.extend({
    urlRoot: "/api/users"
});
module.exports = UserModel;