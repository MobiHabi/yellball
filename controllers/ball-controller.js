/**
 * Created by max on 7/8/14.
 */

var Ball = require('../models/ball');
var service = require('../services/ball-service');
var commonUtil = require('../utils/common-util');

module.exports = {
    all : function(player) {
        console.log("Get all for player =", player);
        var _balls = service.all(player);
        return { entity : _balls.toJSON() };
    },
    byId : function(player, id) {
        console.log("Get by Id =", id);
        var _ball = service.get(player, id);
        return { entity : _ball.toJSON() };
    },
    create : function(player, ball) {
        console.log("Created from =", ball);
        var _ball = Ball.createFrom(player, ball);
        _ball.validate();
        if (Object.keys(_ball.errors).length > 0) {
            return { entity : _ball.errors, status: 400 };
        } else {
            service.create(player, _ball);
            return { entity : _ball.toJSON() };
        }
    },
    update : function(player, id, ball) {
        console.log("Updated by =", id, ball);
        var _ball = Ball.createFrom(player, ball);
        _ball.validate();
        if (Object.keys(_ball.errors).length > 0) {
            return { entity : _ball.errors, status: 400 };
        } else {
            service.update(player, id, _ball);
            return { entity : _ball.toJSON() };
        }
    },
    delete : function(player, id) {
        console.log("Deleted by =", id);
        var result = service.delete(player, id);
        return { entity : result };
    }
};