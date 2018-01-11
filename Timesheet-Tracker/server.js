var request = require("express");
var express = request();
var mongoose = require('mongoose');
var router = request.Router();
var requireDir = require('require-dir');
var config    = require('./config/development');
var db = config.db;
var models = requireDir('./server/models')
var routes = require('./routes');
var bodyParser = require('body-parser');

express.use(bodyParser());
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({extended: false}));

var app = {
    config: config,
    mongoose : mongoose,
    models : models
};

console.log(config);

function endProcess() {
    console.log(new Date() + ' @ endProcess is invoked... ');
    process.exit();
}

mongoose.connection.on('connected', function () {
    console.log('channel connected -----');
    var port = process.env.PORT || 6060;
   routes.register(router);
    express.use('/api', router);
    express.listen(port);
    console.log('Server started successfully.. !!! TIMESHEET- PORT - ' + port + '\n\n\n');

});

mongoose.connection.on('error', function (mongoError) {
    console.log(new Date() + ' @ MongoDB: ERROR connecting to: ' + 'mongodb://' + db.mongo.host + '/' + db.mongo.db + ' - ' + mongoError);
    endProcess();
});

mongoose.connection.on('close', function () {
    console.log(new Date() + ' @ MongoDB: Connection Closed');
    console.log('DataBase down!! Please restart your DB and Server!!');
    // endProcess();
});

console.log('db.mongo : '+JSON.stringify(db.mongo));
mongoose.connect('mongodb://' + db.mongo.host + ':' + db.mongo.port + '/' + db.mongo.db);
module.exports.default = app;
