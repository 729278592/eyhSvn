import cookie from 'react-cookie'

export function saveCookie (name, value) {
  cookie.save(name, value)
}

export function getCookie (name) {
  return cookie.load(name)
}

export function removeCookie (name) {
  cookie.remove(name)
}

export function signOut () {
  cookie.remove('token')
}

export function isLogin () {
  return !!cookie.load('token')
}
