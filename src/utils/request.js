/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import store from '@/store'
import { getCookie } from '@/utils/cookieFunction';
import { Message } from 'element-ui'
// 创建axios实例
const service = axios.create({
  // baseURL: 'http://117.50.14.118:8000/nurseLearning-mobile/',
  baseURL: 'http://192.168.13.252:8080/nurseLearning-mobile/',
  timeout: 5000 // 请求超时时间
})

//http请求拦截器
service.interceptors.request.use(config => {
  // console.log($.parseJSON(getCookie('xauthToken')).token)
  if (getCookie('xauthToken')) {
    // config.headers['xauthToken'] = $.parseJSON(getCookie('xauthToken')).token,
    // service.defaults.headers.common['xauthToken'] = $.parseJSON(getCookie('xauthToken')).token;
    config.headers = {
      xauthToken: $.parseJSON(getCookie('xauthToken')).token
    }
    // config.headers.common['xauthToken']='1231'
    // config.headers.xauthToken = $.parseJSON(getCookie('xauthToken')).token
    // config.headers = {
    //   'xauthToken': $.parseJSON(getCookie('xauthToken')).token
    // }
  }
  // console.log(config.headers)
  return config
}, error => {
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})


//http响应拦截器
service.interceptors.response.use(data => {// 响应成功关闭loading
  return data
}, error => {
  if (error.response.data) {
    Message.error({
      message: error.response.data.err
    })
  }
  return Promise.reject(error)
})

export default service