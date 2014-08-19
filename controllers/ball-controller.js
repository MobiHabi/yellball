/**
 * Created by max on 7/8/14.
 */

var Ball = require('../models/ball');
var commonUtil = require('../utils/common-util');

module.exports = {
    all : function(player) {
        console.log("Get all for player =", player);
        var balls = [];
        balls.push(createOne('player1').toJSON());
        balls.push(createOne('player1').toJSON());
        return balls;
    },
    byId : function(player, id) {
        console.log("Get by Id =", id);
        return retrieveOne('palyer1', id).toJSON();
    },
    create : function(player, ball) {
        console.log("Created from =", ball);
        var _ball = createFrom(player, ball);
        _ball.validate();
        if (Object.keys(_ball.errors).length > 0) {
            return { entity : _ball.errors, status: 400 };
        } else {
            // persist
            return { entity : _ball.toJSON() };
        }
    },
    update : function(player, id, ball) {
        console.log("Updated by =", id, ball);
        var _ball = retrieveOne(player, id);
        var _ballNew = createFrom(player, ball);
        _ball.validate();
        if (_ball.isValid) {
            // persist
            _ball = _ballNew; // TODO
            return _ball.toJSON();
        } else {
            return _ball.errors;
        }
    },
    delete : function(player, id) {
        console.log("Delete by =", id);
        var _ball = retrieveOne(player, id);
        if(_ball) {
            // persist
            return removeOne(player, id);
        }
    }
};

function retrieveOne(player, id) {
    var _ball = createOne(player);
    _ball.id(id);
    return _ball;
}

function createOne(player) {
    var _ball = Ball.create();
    _ball.id(commonUtil.guid());
    _ball.creationDate(new Date());
    _ball.shooter(player);
    _ball.players();
    _ball.href('http://ya.ru');
    _ball.data('some-byte-array');
    return _ball;
}

function createFrom(player, ball) {
    var _ball = Ball.create();
    _ball.id(commonUtil.guid());
    _ball.creationDate(ball.creation_date);
    _ball.shooter(player);
    _ball.players(ball.players);
    _ball.href(ball.href);
    _ball.data(ball.data);
    return _ball;
}

function removeOne(player, id) {
    return false;
}