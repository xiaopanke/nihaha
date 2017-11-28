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
export default new vuex.Store({
    state,
    getters
}) 