import { ADD, REDUCE } from './type'
export const ModuleA = {
    state: {
        num: 0,
        numTest: 100
    },
    mutations: {
        [ADD](state, num = 2) {
            state.num += num
        },
        btn3(state, num = 2) {
            state.num += num
        },
        [REDUCE](state, num = 1) {
            state.numTest -= num;
        }
    },
    actions: {

    }
}