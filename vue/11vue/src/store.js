import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
//初始化一个数据
const state={
    count:0
}

export default new vuex.Store({
    state
}) 