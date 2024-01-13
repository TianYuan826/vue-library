import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'book',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
