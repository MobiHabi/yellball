/**
 * Created by max on 8/5/14.
 */
var model = require('nodejs-model');

var Player = model("Player")
        .attr('id',{
            validations: {
                format: {
                    with: /^[a-z0-9_-]{3,16}$/,
                    message: 'Player id should contain 3-16 allowed characters'
                }
            }
        })
        .attr('creation_date', {
            validations: {
                format: {
                    with: /^\d\d\d\d(-\d\d(-\d\d(T\d\d:\d\d(:\d\d(\.\d{1,}){0,1}){0,1}){0,1}((Z)|([+-]\d\d:\d\d)){0,1}){0,1}){0,1}$/,
                    message: 'Creation date is required and should be in UTC format!'
                }
            }
        })
        .attr('email', {
            validations: {
                validations: {
                    format: {
                        with: /^([a-z0-9_\.-]+)@([\da-z\.-]+)$/,
                        message: 'Email is required'
                    }
                }
            }
        })
        .attr('password',{
            validations: {
                format: {
                    with: /^[a-z0-9_-]{6,18}$/,
                    message: 'Player password should contain 6-18 allowed characters'
                }
            },
            //this tags the accessibility as _private_
            tags: ['private']
        })
        .attr('teams',{
            validations: {
                format: {
                    with: /^({\[)?("[a-z0-9_-]{3,16}",*)*(\]})?$/,
                    allowBlank: true,
                    message: 'only team id array is allowed, or empty string.'
                }
            }
        })
    ;