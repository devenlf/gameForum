/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import { Loading, Message } from 'element-ui'
// 创建axios实例
const service = axios.create({
    baseURL: 'localhost:3000/', // api的base_url
    timeout: 5000 // 请求超时时间
  })

// http请求拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})


// http响应拦截器
service.interceptors.response.use(data => {// 响应成功关闭loading
  return data
}, error => {
  Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

export default service