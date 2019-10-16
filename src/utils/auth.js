import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const RolesKey = 'Admin-Roles'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRoles() {
  return Cookies.get(RolesKey)
}

export function setRoles(token) {
  return Cookies.set(RolesKey, token)
}

export function removeRoles() {
  return Cookies.remove(RolesKey)
}
