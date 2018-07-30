import Vue from 'vue';
import VueRouter from "vue-router";
import login from '../views/login/login';
import home from '../views/home/home';
import project from '../views/project-list/project-list';
import grade from '../views/grade/grade';
import examination from '../views/examination/examination';
import codetest from '../views/codetest/codetest';


Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            //重定向
            redirect: '/project',
            component: home,
            name: home,
            children: [
                {
                    path: 'project',
                    component: project,
                    name: "lihao"
                },
                {
                    path: 'grade',
                    component: grade,
                    name: "grade"
                }
            ]
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/examination',
            component: examination
        },
        {
            path: '/codetest',
            component: codetest
        }
    ]
});

export default router;