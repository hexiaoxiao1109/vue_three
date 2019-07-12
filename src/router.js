import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Address from './views/Address.vue'
import AddAddress from './views/AddAddress.vue'
import Order from './views/Order.vue'
import Goods from './views/Goods.vue'
import Addlist from './views/Addlist.vue'
import Login from './views/Login.vue'
import UserList from './views/UserList.vue'
import UserAdd from './views/UserAdd.vue'
Vue.use(Router)

const router=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 登录
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
        // 地址模块
        {
          path:"address",
          name:"address",
          component:Address,
        },
        
        {
          path:"addaddress",
          name:"AddAddress",
          component:AddAddress
        },
        // 订单模块
        {
          path:"order",
          name:"Order",
          component:Order
        },
        // 商品模块
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
        // 用户模块 
        {
          path: '/UserList',
          name: 'UserList',
          component:UserList
        }, 
        {
          path: '/UserAdd',
          name: 'UserAdd',
          component:UserAdd
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
