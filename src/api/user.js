import service from '@/utils/request';
import axios from 'axios';
//相关接口调用
export function login(account, password) {
  return service({
    url: 'login2',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: 'account=' + encodeURIComponent(account) + '&password=' + encodeURIComponent(password) + ''
  })
}

export function getCode() {
  return axios.get('192.168.12.130:3000/code').then(function (response) {
    console.log(response)
  })
}