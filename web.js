/**
 * This is separate to init the babel register
 */
require('babel-register')({
  presets: ['es2015']
});

var keystone = require('keystone');

keystone.init({
  'name': 'Keystone Angular Starter',
  'brand': 'Keystone Angular Starter',

  'ga property': process.env.GA_PROPERTY || null,
  'ga domain': process.env.GA_DOMAIN || null,

  'favicon': 'www/public/favicon.ico',
  'static': 'www/public',

  'views': 'templates/views',
  'view engine': 'jade',

  'auto update': true,

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': '349fj[qG%^KW23554HK8jh3qp38947jfj'
});

keystone.import('models');

// Set us up some default locals
keystone.set('locals', {
  _: require('lodash'),
  env: keystone.get('evn'),
  utils: keystone.utils,
  editable: keystone.content.editable,
  ga_property: keystone.get('ga property'),
  ga_domain: keystone.get('ga domain')
});

// Import routes
keystone.set('routes', require('./routes'));

// Update the admin ui nav
keystone.set('nav', {
  'posts': ['posts', 'post-categories'],
  'enquiries': 'enquiries',
  'users': 'users'
});

// Start keystone :)
keystone.start();