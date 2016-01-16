var keystone = require('keystone'),
    User = keystone.list('User');

module.exports = function (done) {
    new User.model({
        name: {first: 'Admin', last: 'User'},
        email: 'admin@example.com',
        password: 'admin',
        canAccessKeystone: true
    }).save(done);
};