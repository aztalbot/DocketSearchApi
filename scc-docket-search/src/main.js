import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App
  }
  // ,
  // {
  //   path: '/search/:query',
  //   component: SearchResults
  // }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App)
})
