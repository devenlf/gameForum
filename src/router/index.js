import Vue from 'vue';
import VueRouter from "vue-router";
import login from '../views/login/login';
import home from '../views/home/home';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            //重定向
            redirect: '/home',
            component: home,
            name:home,
            children: [
                {
                    path: 'home',
                    component: home,
                    className: "el-icon-document",
                    name: "lihao"
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