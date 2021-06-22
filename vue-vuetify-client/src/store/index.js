import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    token: '',
    isAuthenticated: false,
    user: {
      id: 0,
      username: '',
      is_staff: false,
    },
    drawer: false,
  },
  mutations: {
    setIsLoading(state, status) {
      state.isLoading = status
    },

    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
        state.user.id = localStorage.getItem('userid')
        state.user.username = localStorage.getItem('username')
        state.user.is_staff = localStorage.getItem('is_staff')
      } else {
        state.token = ''
        state.isAuthenticated = false
        state.user.id = ''
        state.user.username = ''
        state.user.is_staff = false
      }
    },

    setToken(state, token){
      state.token = token
      state.isAuthenticated = true
    },
    setUser(state, user){
      state.user.id = user.id
      state.user.username = user.username      
      localStorage.setItem('username', user.username)
      localStorage.setItem('userid', user.id)
    },
    setUserAccess(state, is_staff){
      state.user.is_staff = is_staff
      localStorage.setItem('is_staff', is_staff)
    },
    removeToken(state){
      state.token = ''
      state.isAuthenticated = false
      state.user.id = ''
      state.user.username = ''
      state.user.is_staff = false

      localStorage.removeItem('token')
      localStorage.removeItem('userid')
      localStorage.removeItem('username')
      localStorage.removeItem('is_staff')
    },

    setDrawer(state, status) {
      state.drawer = status
    }
  },
  actions: {
  },
  modules: {
  }
}
)
