<template>
    <div class="home">
        <div>
            <p @click="btn">跳转about</p>
            <p @click="btn2">跳转bingou</p>
            <p @click="btn1">跳转到test</p>

            <hr />
            <p>{{num}}</p>
            <button @click="add">增加</button>
            <button @click="btn3(20)">用辅助函数触发</button>
            <hr />
            <p>numTest的值是:{{numTest}}</p>
            <button @click="btn4">减少num</button>
            <button @click="REDUCE(10)">通过辅助函数减少num</button>

        </div>
        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations  } from 'vuex'

export default {
    components:{

    },
    methods: {
        btn(){
            this.$router.push('about')
        },
         btn2(){
            this.$router.push('bingou')
        },
        btn1(){
            this.$router.push({path:'/test/123',query:{name:'yue'}})
        },
        add(){
            this.$store.commit('ADD',2)
        },
        btn4(){
            this.$store.commit('REDUCE',3)
        },
       ...mapMutations(['btn3','REDUCE']),
    },
  
    computed:{
        ...mapState({
            "numTest":state=>state.ModuleA.numTest,
            "num":state=>state.ModuleA.num,
        })
    }
}
</script>

<style >
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
    
</style>