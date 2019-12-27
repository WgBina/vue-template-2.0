import {
  getToken,
  setToken,
  removeToken,
  // getRoles,
  removeRoles
} from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login

  // 先登录换取token,这里直接在登录中手动设置了token值
  login({ commit }, token) {
    console.log(token)
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', token)
      setToken(token)
      resolve()
    })
  },
  // get user info

  //  用token换取用户信息, 这里直接派发
  getInfo({ commit }) {
    return new Promise((resolve) => {
      const roles = ['admin']
      commit('SET_ROLES', roles)
      resolve(roles)
    })
  },

  // user logout
  logOut({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      removeRoles()

      resetRouter()
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
