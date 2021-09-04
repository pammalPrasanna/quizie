import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/log-in',
    name: 'log-in',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/quizes',
    name: 'quizes',
    component: () => import('../views/Quizes.vue'),
     meta:{
      requireLogin: true
    }
  },
  {
    path: '/quiz/:id/results',
    name: 'quiz-results',
    component: () => import('../views/QuizResults.vue'),
     meta:{
      requireLogin: true
    }
  },
  {
    path: '/:id/results',
    name: 'user-results',
    component: () => import('../views/UserResults.vue'),
     meta:{
      requireLogin: true
    }
  },
  {
    path: '/add-quiz',
    name: 'add-quiz',
    component: () => import('../views/AddQuiz.vue'),
    meta:{
      requireLogin: true
    }
  },
  {
    path: '/edit-quiz/:id',
    name: 'edit-quiz',
    component: () => import('../views/EditQuiz.vue'),
    meta:{
      requireLogin: true
    }
  },
  {
    path: '/take-quiz/:id',
    name: 'take-quiz',
    component: () => import('../views/TakeQuiz.vue'),
    meta:{
      requireLogin: true
    }
  },
  {
    path: '/view-quiz/:id',
    name: 'view-quiz',
    props: true,
    component: () => import('../views/ViewQuiz.vue'),
    meta:{
      requireLogin: true
    }
  },
  {
    path: '/edit-question/:id',
    name: 'edit-question',
    component: () => import('../views/EditQuestion.vue'),
    meta:{
      requireLogin: true
    }
  },
  {
    path: '/:id/add-question',
    name: 'add-question',
    props: true,
    component: () => import('../views/AddQuestion.vue'),
  
  },
  {
    path: '/401',
    name: '401',
    component: () => import('../views/401.vue'),
  
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
  
  },

]

const router = new VueRouter({
  routes
})



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) {
    if (localStorage.getItem('token')) {
      axios
        .get("/api/v1/users/me")
        .then((response) => {
          next();
        })
        .catch((error) => {
          axios.defaults.headers.common["Authorization"] = "";
          store.commit("removeToken");
          next({ name: 'log-in' })
        });
    }else if (from.name === 'home');
     else if (from.name === 'log-in');
     else next({ name: 'log-in'})
  } else next()
})

export default router
