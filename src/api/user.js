import service from '@/utils/request'
//相关接口调用
export function login(account,password) {
    const data = {
      account: account,
      password: password
    }
    return service({
      url: 'login2',
      method: 'post',
      data
    })
  }