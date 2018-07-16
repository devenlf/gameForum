import { getCookie, setCookie, removeCookie } from '../../utils/cookieFunction'

const user = {
    state: {
        realname: '',
        cookie: getCookie()
    },
    mutations: {
        SET_REALNAME: (state, realname) => {
            state.realname = realname
        },
        SET_COOKIE: (state, cookie) => {
            state.cookie = cookie
        }
    },
    actions: {
        //相关方法
    },
    getters: {
        realname: state => state.user.realname,
        cookie: state => state.user.cookie
    }
}
export default user