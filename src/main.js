import Vue from 'vue';
import App from './App';
import ElementUI from "element-ui";
import axios from "axios";
import VueRouter from "vue-router";
import 'element-ui/lib/theme-chalk/index.css';

import Hello1 from './components/hello1';
import HelloWorld from './components/HelloWorld';

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
        {
          path: '/hello1',
          component: Hello1,
          className:"el-icon-document",
          name:"你好"
        },
        {
          path: '/helloWorld',
          component: HelloWorld,
          className:"el-icon-setting",
          name:"再见"
        }
      ]
    })
/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
