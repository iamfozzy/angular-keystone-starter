/**
 * Sets up restful routes
 */
export default class {
  static apply(keystone, config) {
    let restful = require('restful-keystone')(keystone);
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
  }
}