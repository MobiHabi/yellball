/**
 * Created by max on 8/19/14.
 */

var mongoose = require('mongoose');
var db = require('../drivers/mongo-driver');

var kittySchema = mongoose.Schema({
    name: String
});
var Kitten = mongoose.model('Kitten', kittySchema);

module.exports = {
    all : function(player) {
        Kitten.find(function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens)
        })
    }
};