/**
 * Created by max on 8/5/14.
 */
var model = require('nodejs-model');

module.exports = model("Team")
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
        .attr('captain',{
            validations: {
                format: {
                    with: /^[a-z0-9_-]{3,16}$/,
                    message: 'only player id is allowed'
                }
            }
        })
        .attr('players',{
            validations: {
                format: {
                    with: /^({\[)?("[a-z0-9_-]{3,16}",*)*(\]})?$/,
                    allowBlank: true,
                    message: 'only player id array is allowed, or empty string.'
                }
            }
        })
    ;