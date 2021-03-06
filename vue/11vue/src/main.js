// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import directives from './directives/autofix'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
directives(Vue)


window.bus=new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
