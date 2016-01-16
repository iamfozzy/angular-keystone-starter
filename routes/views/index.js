var keystone = require('keystone');

export default function (req, res) {
    let view = new keystone.View(req, res);

    console.log(res);

    view.render('index');
};