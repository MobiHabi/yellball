/**
 * Created by max on 8/20/14.
 */

// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

//AWS.config.update({
//    httpOptions: {
//        proxy: 'http://10.233.47.4:3128'
//    }
//});

// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket and upload something into it
var bucketName = 'yellball';

//AWS::S3::S3Object.new(:proxy=>1,:host=>myproxy,:port=>myport,:user=>me,:password=>mypassword)

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
    },
    fetch : function(player, key) {
        var keyName = player+uuid.v4();
//        var params = {Bucket: bucketName, Key: keyName, Body: data};
        s3.listBuckets(function(err, data) {
            if (err)
                console.log(err)
            else
                for (var index in data.Buckets) {
                    var bucket = data.Buckets[index];
                    console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
                }
        });
    }
}