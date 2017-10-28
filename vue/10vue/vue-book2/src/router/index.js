import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component:()=>import('../components/Home') },
    {path: '/home',component:()=>import('../components/Home') },
    {path: '/collect',component:()=>import('../components/Collect') },
    {path: '/add',component:()=>import('../components/Add') },
    {path: '/detail/:id',component:()=>import('../components/Detail'),name:'detail' },
    {path: '/list',component:()=>import('../components/list') },
    {path: '*',redirect: '/home'},
  ]
})
