module.exports = {
    template: require('./template.html'),
    props: {
        labels: {
            type: Array,
            default: ['','']
        },
        active: {
            default: false
        }
    }
};
