var mongoose = require('bluebird').promisifyAll(require('mongoose')),
	config = require('./config'),
	db;

mongoose.connect('mongodb://' + config.database.host + '/' + config.database.db);

db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
	console.log('connected to mongodb');
});

exports.mongoose = mongoose;
exports.db = db;