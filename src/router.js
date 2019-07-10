import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import  Uselist from './views/Uselist.vue'
import Headed from './components/Headed.vue'
import Select from './components/Select.vue'
import Login from './views/Login.vue'
Vue.use(Router)
const router=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: "uselist", name: "uselist", component: Uselist },
    ]
    },
    {
      path: '/headed',
      name: 'headed',
      component: Headed,     
    }
    ,{
      path: '/select',
      name: 'select',
      component: Select,     
    }
    ,{
      path: '/login',
      name: 'login',
      component: Login,     
    }
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

