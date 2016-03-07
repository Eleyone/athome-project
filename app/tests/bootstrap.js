/**
 * Created by arnaud on 24/02/16.
 */
var chai = require('chai');

chai.config.includeStack = true;

global.expect = chai.expect;
global.should = chai.should();
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

global._ = require("underscore");

global.dbUri = 'mongodb://localhost:27017/athome_test';

global.mongoose = require("mongoose");
global.dbTest = require('mocha-mongoose')(dbUri);
