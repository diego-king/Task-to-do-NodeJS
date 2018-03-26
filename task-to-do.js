var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
mongoose.connect(config.connStr);

var dbRouter = require('./controllers/dbController');
var app = express();
var port = 3000;
app.set('View engine', 'ejs');
app.use('/db', dbRouter);
app.listen(port);