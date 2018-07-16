import router from '../router';
import {getCookie} from '../utils/cookieFunction'
const isLogin = (getCookie('userInfo')!==undefined);

router.beforeEach((to, from, next) => {
    if(isLogin){ //如果有就直接到首页咯
        next();
    } else {
        if(to.path==='/login'){ //如果是登录页面路径，就直接next()
            next();
        } else { //不然就跳转到登录；
            next('/login');
        }

    }
})