/**
 * Created by max on 7/8/14.
 */

var express = require('express');
var ball = require('../controllers/ball-controller');

var PLAYER = "player1";

module.exports = {
    init : function(router) {
        var _self = this;
        /* Rest API */
        router.route('/ball/api').
            get(function (req, res) {
                res.send(_self.info());
            });
        /* Ball API */
        router.route('/ball')
            .get(function (req, res) {
                var response = ball.all(PLAYER);
                res.send(response.entity, response.status || 200);
            })
            .post(function (req, res) {
                var response = ball.create(PLAYER, req.body);
                res.send(response.entity, response.status || 200);
            });
        router.route('/ball/:id')
            .get(function (req, res) {
                var response = ball.byId(PLAYER, req.params.id);
                res.send(response.entity, response.status || 200);
            })
            .put(function (req, res) {
                var response = ball.update(PLAYER, req.params.id, req.body);
                res.send(response.entity, response.status || 200);
            })
            .delete(function (req, res) {
                var response = ball.delete(PLAYER, req.params.id);
                res.send(response.entity, response.status || 200);
            });
    },
    info : function() {
        var info = {
            url: "/ball/",
            methods: [{
                name: "Get Resent Balls",
                type: "GET",
                params: "EMPTY",
                body: "EMPTY",
                result: [{
                    "200": "Array of balls as JSON"
                }]
            },{
                name: "Submit New Ball",
                type: "POST",
                params: "EMPTY",
                body: "Ball as json with fields: creation_date (UTC), shooter (Author), players (Array of IDs), href (URL), data (BASE64)",
                result: [{
                    "200": "Created ball",
                    "400": "Unvalidated fields with errors"
                }]
            },{
                name: "Get Specific Ball",
                type: "GET",
                params: "ball id",
                body: "Ball as json with fields: creation_date (UTC), shooter (Author), players (Array of IDs), href (URL), data (BASE64)",
                result: "Found ball"
            },{
                name: "Update Specific Ball",
                type: "PUT",
                params: "ball id",
                body: "Ball as json with fields: creation_date (UTC), shooter (Author), players (Array of IDs), href (URL), data (BASE64)",
                result: "Updated ball"
            },{
                name: "Delete Specific Ball",
                type: "DELETE",
                params: "ball id",
                body: "EMPTY",
                result: "EMPTY"
            }]
        };
        return info;
    }
};