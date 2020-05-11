import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first'
import A from '@/components/a'
import A1 from '@/components/a1'
import B from '@/components/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path: '/a',
      component: A,
      children:[
        {
          path:'/a1',
          component:A1
        }
      ]
    },
    {
      path: '/b',
      component: B
    }
  ]
})
