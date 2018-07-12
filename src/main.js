import Vue from 'vue';
import App from './App';
import ElementUI from "element-ui";
import VueRouter from "vue-router";
import 'element-ui/lib/theme-chalk/index.css';

import Hello1 from './components/hello1';
import HelloWorld from './components/HelloWorld';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
        {
          path: '/hello1',
          component: Hello1
        },
        {
          path: '/helloWorld',
          component: HelloWorld
        }
      ]
    })
/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
