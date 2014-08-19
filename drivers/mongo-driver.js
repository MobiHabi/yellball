/**
 * Created by max on 8/19/14.
 */

var commonUtil = require('../utils/common-util');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

var options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
};

var mongodbUri = 'mongodb://yellball:yellball@ds033669.mongolab.com:33669/yellball';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
    // Wait for the database connection to establish, then start the app.
});

module.exports = conn;