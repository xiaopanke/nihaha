import Vue from 'vue'
import Router from 'vue-router'
import Eventbus from '@/components/Eventbus'
import Eventbusb from '@/components/Eventbusb'
import Uploadimg from '@/components/Uploadimg'
import Stylus from '@/components/Stylus'
import Created from '@/components/Created'
import Vuexc from '@/components/Vuex'
import Vuexa from '@/components/Vuexa'
import Vuexb from '@/components/Vuexb'
import Toastparent from '@/components/Toastparent'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/eventbus',component: Eventbus},
    {path:'/eventbusb',component:Eventbusb},
    {path:'/uploadimg',component:Uploadimg},
    {path:'/stylus',component:Stylus},
    {path:'/created',component:Created},
    {path:'/vuex',component:Vuexc},
    {path:'/vuexa',component:Vuexa},
    {path:'/vuexb',component:Vuexb},
    {path:'/toastparent',component:Toastparent}
  ]
})
