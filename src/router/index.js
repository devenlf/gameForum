import Vue from 'vue';
import VueRouter from "vue-router";
import login from '../views/login';
import home from '../views/home';
import Hello1 from '../components/hello1';
import HelloWorld from '../components/HelloWorld';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            //重定向
            redirect: '/hello1',
            component: home,
            name:home,
            children: [
                {
                    path: 'hello1',
                    component: Hello1,
                    className: "el-icon-document",
                    name: "lihao"
                },
                {
                    path: 'helloWorld',
                    component: HelloWorld,
                    className: "el-icon-setting",
                    name: "liaho2"
                }
            ]
        },
        {
            path: '/login',
            component: login,
        }
    ]
});

export default router;