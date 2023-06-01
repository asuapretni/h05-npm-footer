'use strict';  //all of written code must follow the very letter of the javascript law

var moment = require('moment');  // import moment from 'moment';

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};