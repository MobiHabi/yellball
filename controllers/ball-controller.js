/**
 * Created by max on 7/8/14.
 */

var Ball = require('../models/ball');
var commonUtil = require('../utils/common-util');

var controller = {
    all : function(player) {
        var balls = [];
        balls.push(createOne('player1').toJSON());
        balls.push(createOne('player1').toJSON());
        console.log("Get all for player =",player);
        return balls;
    },
    byId : function(id) {
        console.log("Get by Id =",id);
        return retrieveOne('palyer1', id).toJSON();
    },
    create : function(ball) {
        console.log("Created from =",ball);
    }
};

module.exports = controller;

function retrieveOne(player, id) {
    var ball = createOne(player);
    ball.id(id);
    return ball;
}

function createOne(player) {
    var ball = Ball.create();
    ball.id(commonUtil.guid());
    ball.creationDate(new Date());
    ball.shooter(player);
    ball.players();
    ball.href('http://ya.ru');
    ball.data('some-byte-array');
    return ball;
}