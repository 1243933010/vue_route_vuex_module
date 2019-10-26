<template>
  <div>
    <p>{{this.$route.params.id}}</p>
    <p @click="demo">跳转</p>

    <hr />
    <p>{{num}}</p>
    <button @click="RIDE(2)">点击让数值乘2倍</button>
    <button @click="SETTIMEOUT_NUM(2)">点击触发异步action事件</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions } from 'vuex';

import {setApi} from '../until';
import {num} from '../Api/apiUrl/num'
export default {
  data() {
    return {};
  },
  created() {
     setApi(num).then((response)=>{
         this.$store.commit('SET_NUM',response.data.num)
     })
  },
  methods: {
    demo() {
      this.$router.push({ path: "/home" });
    },
    ...mapMutations(['RIDE']),
    ...mapActions(['SETTIMEOUT_NUM'])
  },
  computed: {
      ...mapState({
          'num':state=>state.ModuleB.num
      })
  },
};
</script>