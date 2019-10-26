import Vue from 'vue'
import Router from 'vue-router'
import {test} from './routes/test'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [...test]
})
