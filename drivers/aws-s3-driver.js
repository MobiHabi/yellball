/**
 * Created by max on 8/20/14.
 */

// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket and upload something into it
var bucketName = 'yellball';

module.exports = {
    push : function(player, data) {
        var keyName = player+uuid.v4();
        var params = {Bucket: bucketName, Key: keyName, Body: data};
        s3.putObject(params, function(err, data) {
            if (err)
                console.log(err)
            else
                console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
        });
    }
}

