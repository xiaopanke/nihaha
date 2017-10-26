import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './vuex'
//导入样式
require('swiper/dist/css/swiper.css')
//导入模块
import VueAwesomeSwiper from 'vue-awesome-swiper'
//使用
Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2861488593,1651617597&fm=111&gp=0.jpg',
  loading: 'http://cdn.uehtml.com/201402/1392662520296_1140x0.gif',
  attempt: 1
})

new Vue({
  el: '#app',
  router,
  store,
  ...App
})





