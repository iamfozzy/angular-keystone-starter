module.exports = {
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
};

