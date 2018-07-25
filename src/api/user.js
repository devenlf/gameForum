import service from '@/utils/request'
//相关接口调用
export function login(account,password) {
    return service({
      url: 'login2',
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
      },
      data:'account='+account+'&password='+password+''
    })
  }