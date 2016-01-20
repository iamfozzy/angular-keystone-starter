import indexView from './views/index'
import RestfulRouter from '../lib/RestfulRouter';

var keystone = require('keystone');
var middleware = require('./middleware');
var restful = require('restful-keystone')(keystone);

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);

// Handle 404 errors
keystone.set('404', function (req, res, next) {
  res.notfound();
});

// Handle other errors
keystone.set('500', function (err, req, res, next) {
  var title, message;
  if (err instanceof Error) {
    message = err.message;
    err = err.stack;
  }
  res.err(err, title, message);
});

// Bind Routes
module.exports = function (app) {

  // Apply the restful routes
  restful.expose(
    {
      User: {
        methods: ['list', 'retrieve'],
        show: ['name', 'email'],
        edit: ['name']
      },
      Post: {
        methods: ['list', 'retrieve'],
        filter: {
          state: "published"
        },
        populate: [{
          path: 'author',
          select: 'name'
        }, {
          path: 'categories',
          select: 'name'
        }]
      }
    }).start();

  // Bind a catch-all route so we can use angular ui router
  app.get('*', indexView);

};