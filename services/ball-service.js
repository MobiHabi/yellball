/**
 * Created by max on 8/19/14.
 */

var Ball = require('../models/ball');
var mongoose = require('mongoose');
var db = require('../drivers/mongo-driver');
var storage = require('../drivers/aws-s3-driver');

var kittySchema = mongoose.Schema({
    name: String
});
var Kitten = mongoose.model('Kitten', kittySchema);

module.exports = {
    all : function(player) {
        Kitten.find(function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens)
        });

        var balls = { data : [], toJSON : function() {
            var _data = [];
            this.data.forEach(function(element) {
                _data.push(element.toJSON());
            });
            return _data;
        } };
        balls.data.push(Ball.createOne('player1'));
        balls.data.push(Ball.createOne('player1'));
        return balls;
    },
    get : function(player, id) {
        var _ball = retrieveOne(player, id)
//        storage.push(player, _ball.data()); // TODO test only
//        db.save(id);
        storage.fetch(player, id);
        return _ball;
    },
    create : function(player, ball) {
//        db.save(ball.toJson());
        storage.push(player, ball.data());
        return ball;
    },
    update : function(player, id, ball) {
        var _ball = retrieveOne(player, id)
//        db.update(ball.toJson());
        storage.push(player, ball.data());
        return ball;
    },
    delete : function(player, id) {
        var _ball = this.get(player, id);
        if(_ball) {
            return removeOne(player, id);
        }
        return false;
    }
};

/* Temporary stub functions */

function retrieveOne(player, id) {
    var _ball = Ball.createOne(player);
    _ball.id(id);
    return _ball;
}

function removeOne(player, id) {
    return false;
}