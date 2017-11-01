import Vue from 'vue'
import Router from 'vue-router'
import Promise from '@/components/Promise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/promise',
      component: Promise
    }
  ]
})
