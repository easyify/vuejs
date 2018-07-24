import Vue from 'vue';
import App from './index';
{{#router}}
import router from './router';
{{/router}}

{{#axios}}
import axios from 'axios';
Vue.prototype.$http = axios;
{{/axios}}


{{#element}}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
{{/element}}


Vue.config.productionTip = false;



new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  template: '<App/>',
  components: {
    App
  },
  render: (createElement) => createElement(App)
});