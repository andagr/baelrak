'use strict';

var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/', function (req, res) {
    let coords = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    let onEnter = (player) => {
        log(`Hello $player`);
    }
    return {
        coords: coords,
        onEnter: onEnter
    };
});

console.log("PORT: ", process.env.PORT)

app.listen(process.env.PORT || 8081, function () {
    console.log('App listening...');
});
