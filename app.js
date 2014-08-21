// middleware
var express = require('express');
var expressSession = require('express-session');

var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan  = require('morgan');

// routes
var routes = require('./routes/index');
var rest = require('./routes/rest');
var users = require('./routes/users');

var app = module.exports = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(expressSession({ secret: 'my secret here' }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
app.use(morgan('combined'));

// auth filter
app.all('*', function(req, res, next) {
    var sess = req.session;
    if (sess.views) {
        sess.views++;
        console.log('views',sess.views);
    } else {
        sess.views = 1;
        console.log('welcome to the session demo. refresh!');
    }
    console.log('sessionId', sess.id);
    next();
});

// url mapping
app.use('/', routes);
app.use('/rest', rest);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
//}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

process.on('uncaughtException', function(err) {
    console.log('Threw Exception: ', err);
});