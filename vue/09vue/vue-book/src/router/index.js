import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/*import Home from '../components/Home';
import Add from '../components/Add';
import List from '../components/List';
import Collect from '../components/Collect';
import Detail from '../components/Detail';*/
//组件可以支持异步定法，写成一个函数，函数返回一个promise对象

/*
let Home=()=>(Promise.resovle({}))
coding split
webpack 2+ 提供的分开打包
*/
//coding split
export default new Router({
  mode:'history',
  routes: [
    {path:'/',component:()=>import('../components/Home')},
    {path:'/home',component:()=>import('../components/Home')},
    {path:'/add',component:()=>import('../components/Add')},
    {path:'/list',component:()=>import('../components/List')},
    {path:'/collect',component:()=>import('../components/Collect')},
    {path:'/detail/:id',component:()=>import('../components/Detail'),name:'detail'},
    {path:'*',redirect:'/home'},
  ]
})
