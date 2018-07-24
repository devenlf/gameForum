import { getCookie, setCookie, removeCookie } from '../../utils/cookieFunction';
import { login } from '@/api/user';

const user = {
    state: {
        realname: '',
        cookie: getCookie()
    },
    mutations: {
        SET_REALNAME: (state, name) => {
            state.realname = name
        },
        SET_COOKIE: (state, num) => {
            state.cookie = num
        }
    },
    actions: {
        //相关方法
        Login({ commit }, userInfo) {
            const account = userInfo.account.trim()
            return new Promise((resolve, reject) => {
                login(account, userInfo.password).then(response => {
                    if (response.data.success) {
                        let userInfo = {};
                        userInfo.token = response.data.data.xauthToken;
                        userInfo.data = {};
                        userInfo.data.name = response.data.data.user.realName;
                        commit('SET_COOKIE', userInfo.token)
                        commit('SET_REALNAME', userInfo.data.name)
                        setCookie(userInfo)
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        LogOut({ commit }) {
            commit('SET_COOKIE', '');
            removeCookie();
        }
    }
}
export default user