module.exports = {
    User: {
        methods: ['create', 'list', 'retrieve', 'update', 'remove'],
        show: ['name', 'email'],
        edit: ['name']
    },
    Post: {
        methods: ['create', 'list', 'retrieve', 'update', 'remove'],
        filter: {
            state: "published"
        },
        populate: [{
            path: 'author',
            select: 'name email'
        }, {
            path: 'categories',
            select: 'name'
        }]
    }
};

