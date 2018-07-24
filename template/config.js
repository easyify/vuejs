module.exports = {
    env: {
        prod: {
            NODE_ENV: '"production"',
            API: ''
        },
        dev: {
            NODE_ENV: '"development"',
            API: ''
        },
        alpha: {
            NODE_ENV: '"production"',
            API: ''
        }
    },
    vendor:[
        'vue/dist/vue.esm.js', 
        'vue-router', 
        'axios', 
        'vuex'
    ]
}