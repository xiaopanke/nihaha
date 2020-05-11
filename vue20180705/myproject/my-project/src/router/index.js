import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import echart from '@/components/echart'
import num from '@/components/num'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/echart',
      name: 'echart',
      component: echart
    },
    {
      path: '/num',
      name: 'num',
      component: num
    }
  ]
})
