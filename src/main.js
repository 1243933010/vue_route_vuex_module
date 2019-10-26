import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'


Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requireAuth)){
    console.log('即将跳转的页面需要登录权限')
    next()
  }else{
    next()
  }
 
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
