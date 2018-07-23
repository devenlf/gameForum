import Vue from 'vue';
import App from './App';
import '@/style/_reset.scss'
import axios from "axios";
import store from '@/store'
import router from './router';
import './router/router_valid';
import $ from 'jquery';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/font-awesome-4.7.0/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

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
