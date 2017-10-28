import Vue from 'vue'
import App from './App'
import router from './router'

//轮播
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
