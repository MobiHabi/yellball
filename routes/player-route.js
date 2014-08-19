/**
 * Created by max on 8/19/14.
 */

var express = require('express');

var PLAYER = "player1";

module.exports = {
    init : function(router) {
        var _self = this;
        /* Rest API */
        router.route('/player/api').
            get(function (req, res) {
                res.json(_self.info());
            });
        /* Ball API */
        router.route('/player')
            .get(function (req, res) {
                res.json(PLAYER);
            })
            .post(function (req, res) {
                res.json("Submitted player", req.body);
            });
        router.route('/player/:id')
            .get(function (req, res) {
                res.json("Got player by id", req.params.id);
            })
            .put(function (req, res) {
                res.json("Updated player by id", req.params.id, req.body);
            })
            .delete(function (req, res) {
                res.json("Deleted player by id", req.params.id);

            });
    },
    info : function apiInfo() {
        var info = {
            url: "/player/",
            methods: [
                {
                    name: "Get Resent Players",
                    type: "GET",
                    params: "EMPTY",
                    body: "EMPTY",
                    result: [{
                        "200": "Array of balls as JSON"
                    }]
                }
            ]
        };
        return info;
    }
};
