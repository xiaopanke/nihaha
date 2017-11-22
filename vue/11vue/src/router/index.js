import Vue from 'vue'
import Router from 'vue-router'
import Eventbus from '@/components/Eventbus'
import Eventbusb from '@/components/Eventbusb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/eventbus',
      component: Eventbus
    },
    {
      path:'/eventbusb',
      component:Eventbusb
    }
  ]
})
