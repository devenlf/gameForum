import Vue from 'vue';
import App from './App';
import ElementUI from "element-ui";
import axios from "axios";
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store'
import './router/router_valid';


Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
