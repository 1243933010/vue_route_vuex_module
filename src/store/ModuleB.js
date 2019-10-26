import { RIDE ,SET_NUM,SETTIMEOUT_NUM,GETTERS_NUM} from './type'
export const ModuleB={
    state:{
        num:5
    },
    getters:{
        [GETTERS_NUM](state){
            return state.num + '***'
        }
    },
    mutations:{
        [RIDE](state,data=1){
            state.num =state.num *data
        },
        [SET_NUM](state,data){
            state.num = data
        }
    },
    actions:{
        [SETTIMEOUT_NUM](context,data){
           setTimeout(()=>{
            context.commit(RIDE,data)
           },2000)
        }
    }
}

