import Cookies from 'js-cookie'

const CookieKey = 'xauthToken'

export function getCookie(cookie=CookieKey) {
  return Cookies.get(cookie)
}

export function setCookie(cookie) {
  return Cookies.set(CookieKey,cookie)
}

export function removeCookie(cookie=CookieKey) {
  return Cookies.remove(cookie)
}
