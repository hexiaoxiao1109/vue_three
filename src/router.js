import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Address from './views/Address.vue'
// import LookOver from './views/LookOver.vue'
import modalTest from './views/modalTest.vue'
import Uselist from './views/Uselist.vue'
import Goods from './views/Goods.vue'
import Addlist from './views/Addlist.vue'
import Login from './views/Login.vue'
import LookOver from './views/LookOver.vue'
import UserList from './views/UserList.vue'
import UserAdd from './views/UserAdd.vue'
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
          component:modalTest,
        },
        {
          path:"lookover",
          name:"lookOver",
          component:LookOver
        },
        {
          path:"uselist",
          name:"Uselist",
          component:Uselist
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
        }, {
          path: '/UserList',
          name: 'UserList',
          component:UserList
        }, {
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
