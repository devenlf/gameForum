import service from '@/utils/request';
//相关接口调用
export function login(account,password) {
    return service({
      url: 'login2',
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data:'account='+encodeURIComponent(account)+'&password='+encodeURIComponent(password)+''
    })
  }