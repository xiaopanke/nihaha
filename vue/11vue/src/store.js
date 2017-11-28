import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
//初始化一个数据
const state={
    count:0,
    count2:1
}

//getters计算state里的变量 
const getters={
    count(state){
        return state.count+10;
    }
}

const actions={
    add({commit},n){
        commit('add',n)//通过commit提交给mutations
    }
}
const mutations={
    add(state,n){
        state.count+=n
    }
}
export default new vuex.Store({
    state,
    getters,
    mutations,
    actions
}) 