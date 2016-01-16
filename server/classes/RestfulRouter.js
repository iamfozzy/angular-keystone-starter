/**
 * Sets up restful routes
 */
export default class {
    static apply(keystone, config) {
        let restful = require('restful-keystone')(keystone);

        restful.expose(config).start();
    }
}