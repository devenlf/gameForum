import request from '@/utils/request'
//相关接口调用
export function login(account,password) {
    const data = {
      account: account,
      password: password
    }
    return request({
      url: 'nurseLearning-mobile/login2',
      method: 'post',
      data
    })
  }