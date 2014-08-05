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
router.route('/ball')
    .get(function(req, res) {

        res.send('REST. Ball was gotten successfully');
    })
    .post(function(req, res) {

        res.json({ message: 'REST. Ball was posted successfully'});
    });


module.exports = router;
