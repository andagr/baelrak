'use strict';

var express = require('express');
var app = express();
var api = require('./api');
var session = require('express-session');

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "Hello secret"
}));
app.use(function(req, res, next) {
    var player = req.session.player;
    if (!player) {
        player = req.session.player = {
            roomId: 0,
            pos: {x: 4, y: 4}
        };
    }

    next();
});
app.use('/api', api);
app.use(express.static('static'));

app.listen(process.env.PORT || 8081, function () {
    console.log('App listening...');
});
