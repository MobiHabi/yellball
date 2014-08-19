/**
 * Created by max on 7/8/14.
 */
var express = require('express');
var ball = require('../routes/ball-route');
var player = require('../routes/player-route');

var router = module.exports = express.Router();

/* Rest API */
router.get('/api/', function(req, res) {
    res.json({
        ball: ball.info(),
        player: player.info()
    });
});

// APIs
ball.init(router);
player.init(router);