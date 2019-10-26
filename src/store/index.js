import Vue from 'vue'
import Vuex from 'vuex'
import {ModuleA} from './ModuleA'
import { ModuleB } from './ModuleB'
Vue.use(Vuex)

export default new Vuex.Store({
  getters:{},
  modules: {
    ModuleA,
    ModuleB
  }
})
