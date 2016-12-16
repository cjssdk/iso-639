/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

var langs = require('langs/data'),
    codes = {
        1:    {},
        '2T': {},
        '2B': {}
    },
    index, size, lang;


// rework language data
for ( index = 0, size = langs.length; index < size; index++ ) {
    lang = langs[index];

    // link all tables with the same data
    codes['1'][lang['1']] = codes['2T'][lang['2T']] = codes['2B'][lang['2B']] = [lang.name, lang.local];
}

// clear
langs = null;


// public
module.exports = codes;
