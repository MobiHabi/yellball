/**
 * Created by max on 8/5/14.
 */
var model = require('nodejs-model');

var Ball = model("Ball")
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
            validations: {
                format: {
                    with: /^({\[)?("[a-z0-9_-]{3,16}",*)*(\]})?$/,
                    allowBlank: true,
                    message: 'only user id array is allowed, or empty string.'
                }
            }
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
                    minimum: 100,
                    messages: {
                        tooShort: 'Ball\'s data is short or empty'
                    }
                }
            },
            //this tags the accessibility as _private_
            tags: ['transit']
        })
    ;

module.exports = Ball;

//
//var u1 = User.create();
////getters are generated automatically
//u1.name('foo');
//u1.password('password');
//
//console.log(u1.name());
////prints _foo_
//
////Invoke validations and wait for the validations to fulfill
//u1.validate(function() {
//    if u1.isValid {
//        //validated, perform business logic
//    } else {
//        //validation failed, dump validation errors to the console
//        console.log(p1.errors)
//    }
//});
//
////get object as a plain object, ready for JSON
//console.log(u1.toJSON());
////produces: { name: 'foo' }
//
////now also with attributes that were tagged with 'private'
//console.log(u1.toJSON('private'));
////produces: { name: 'foo' } { password: 'password' }