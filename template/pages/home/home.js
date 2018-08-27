import Vue from "vue";
import "Utils/common";
import App from "./home.vue";
new Vue({
    el: '#app',
    components: {
        App
    },
    render: (createElement) => createElement(App)
});