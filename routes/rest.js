/**
 * Created by max on 7/8/14.
 */
var express = require('express');
var ball = require('../controllers/ball-controller');

var router = express.Router();

/* Rest for Mobile requests. */
router.get('/', function(req, res) {
    res.send('REST. Respond with a resource');
});

// Ball API
router.route('/ball')
    .get(function(req, res) {
        var _balls = ball.all();
        res.send(_balls);

        //console.debug('session =', req.session);
    });

router.route('/ball/:id')
    .get(function(req, res) {
        var id = req.params.id;
        var _ball = ball.byId(id);
        res.send(_ball);
    })
    .post(function(req, res) {
        ball.create();
        res.json({ message: 'REST. Ball was posted successfully'});
    });

// Player API

// Team API

module.exports = router;
