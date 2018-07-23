import router from '../router';
import { getCookie } from '../utils/cookieFunction'
import store from '@/store'

router.beforeEach((to, from, next) => {
    const isLogin = (getCookie('xauthToken') && getCookie('xauthToken') !== 'undefined');
    if (to.path === '/login') { //如果是登录页面路径，就直接next()
        next();
    } else {
        if (isLogin) { //如果有就直接到首页
            next();
        } else {
            //不然就跳转到登录；
            next('/login');
        }
    }
})