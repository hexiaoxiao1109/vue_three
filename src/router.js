import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Address from './views/Address.vue'
import LookOver from './views/LookOver.vue'
import modalTest from './views/modalTest.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path:"address",
          name:"address",
          component:Address,
        },
        {
          path:"modal",
          name:"modal",
          component:modalTest,
        },
        {
          path:"lookover",
          name:"lookOver",
          component:LookOver
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
