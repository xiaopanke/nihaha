import Vue from 'vue'; //引入vuejs 因为vue是一个第三方模块，所以不需要./方式
/*
* vue=runtime +compiler 如果只有runtime 体积会减小6kb
* */
//引入第三方模块时如果引入的是默认main对应的需要将路径写全
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router' //引入router 如果是index.js可以活力index.js


let vm = new Vue({
    el:'#app',
    render: h => h(App), //用根实例替换掉app
    router  //this.$router 方法  this.$route属性
});

