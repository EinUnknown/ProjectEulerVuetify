import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import Zero01 from "../views/001.vue"
import Zero02 from "../views/002.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/001',
    name: '001',
    component: Zero01
  },
  {
    path: '/002',
    name: '002',
    component: Zero02
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
