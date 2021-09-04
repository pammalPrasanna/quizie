import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'


// axios.defaults.baseURL = 'https://pammalprasanna.pythonanywhere.com'
axios.defaults.baseURL = 'http://127.0.0.1:8000'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
