import Vue from 'vue'
import Router from 'vue-router'

import home from './views/home'
// import about from './views/about'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component:home,
      redirect:{name:'about'},
      meta:{
        requireAuth:true
      },
      children:[
        {
          path:'/about',
          name:'about',
          component:()=>import('./views/about.vue')
        },
        {
          path:'/bingou',
          name:'bingou',
          component:()=>import('./views/bingou.vue')
        }
      ]
    },
    {
      path:'/test/:id',
      name:'test',
      component:()=>import ('./views/test.vue')
    }
    
    
   
    
  ]
})
