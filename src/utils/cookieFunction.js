import Cookies from 'js-cookie'

// const CookieKey = 'SSOLoginCookieName_31huiyi'

export function getCookie(CookieKey) {
  return Cookies.get(CookieKey)
}

export function setCookie(CookieKey,cookie) {
  return Cookies.set(CookieKey, cookie)
}

export function removeCookie(CookieKey) {
  return Cookies.remove(CookieKey)
}
