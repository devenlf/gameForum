import Cookies from 'js-cookie'

const CookieKey = 'xauthToken'

export function getCookie() {
  return Cookies.get(CookieKey)
}

export function setCookie(cookie) {
  return Cookies.set(CookieKey,cookie)
}

export function removeCookie() {
  return Cookies.remove(CookieKey)
}
