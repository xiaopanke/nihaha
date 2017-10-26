//npm install vuex
import Vue from 'vue';
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)
let state={  //data:{}  和组件中的数据功能是一样的
  count:0

}
let mutations={ //就是组件中的方法
    add(state,val){ //state代表的是状态，是默认参数
        state.count+=val;
    },
    reduce(state,val){
        state.count-=val
    }
}
const getters={ //组件中的computed
    type:(state)=>state.count%2 ? '奇数' : '偶数'
}
let store=new Vuex.Store({
  state,
  mutations,
  getters,
  strict:true //开户严格模式，必须通过mutaion来修改
})

new Vue({
    el:'#app',
    store, //this.$store 每个组件都会拥有一个$store属性
    ...App,
})
