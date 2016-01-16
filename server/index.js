/**
 * This is separate to init the babel register
 */
require('babel-register')({
    presets: ['es2015']
});

require('./app.js');