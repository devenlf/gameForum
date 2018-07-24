import request from '@/utils/request'
//相关接口调用
export function login(userInfo) {
    const data = {
      account: userInfo.account,
      password: userInfo.password
    }
    return request({
      url: 'nurseLearning-mobile/login2',
      method: 'post',
      data
    })
  }