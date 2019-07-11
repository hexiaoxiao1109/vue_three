import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Address from './views/Address.vue'
import Modal from './components/Modal.vue'
import Order from './views/Order.vue'
import Goods from './views/Goods.vue'
import Addlist from './views/Addlist.vue'
import Login from './views/Login.vue'
import AddAddress from './views/AddAddress.vue'
Vue.use(Router)

const router=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,     
    },
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
          component:Modal,
        },
        {
          path:"addaddress",
          name:"AddAddress",
          component:AddAddress
        },
        {
          path:"order",
          name:"Order",
          component:Order
        },
        {
          path: '/goods',
          name: 'Goods',
          component: Goods
        },
        {
          path: '/addlist',
          name: 'Addlist',
          component:Addlist
        },
      ]
    },
  ]
})
router.beforeEach((to,from,next)=>{
  var token=localStorage.getItem('username')
  if(to.path!=='/login' && !token){
    next({path:'/login'})
  }else{
    next()
  }
  })
  
  export default router
