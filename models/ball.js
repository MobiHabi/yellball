/**
 * Created by max on 8/5/14.
 */
var model = require('nodejs-model');

module.exports = model("Ball")
        .attr('id',{

        })
        .attr('creation_date', {
            validations: {
                format: {
                    with: /^\d\d\d\d(-\d\d(-\d\d(T\d\d:\d\d(:\d\d(\.\d{1,}){0,1}){0,1}){0,1}((Z)|([+-]\d\d:\d\d)){0,1}){0,1}){0,1}$/,
                    message: 'Creation date is required and should be in UTC format!'
                }
            }
        })
        .attr('shooter',{
            validations: {
                format: {
                    with: /^[a-z0-9_-]{3,16}$/,
                    message: 'only user id is allowed'
                }
            }
        })
        .attr('players',{
//            validations: {
//                format: {
//                    with: /^(\[)?("[a-z0-9_-]{3,16}",*)*(\])?$/,
//                    allowBlank: true,
//                    message: 'only user id array is allowed, or empty string.'
//                }
//            }
        })
        .attr('href', {
            validations: {
                format: {
                    with: /^((https|http)?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*).*$/,
                    allowBlank: true,
                    message: 'only url is allowed, or empty string.'
                }
            }
        })
        .attr('data', {
            validations: {
                length: {
                    minimum: 10, //100
                    messages: {
                        tooShort: 'Ball\'s data is short or empty'
                    }
                }
            },
            //this tags the accessibility as _private_
            tags: ['transit']
        })
    ;