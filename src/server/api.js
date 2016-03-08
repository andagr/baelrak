'use strict';

let express = require('express');
let router = express.Router();
let rooms = require('./rooms');

router.get('/room', function (req, res) {
    res.send(rooms(req.session.player.roomId));
});

router.post('/move/:direction', function(req, res) {
    let player = req.session.player;
    player.pos = rooms(player.roomId).move(player.pos, req.params.direction);
    console.log(player.pos);
    res.send(player);
});

module.exports = router;
