import Vue from 'vue' //因为路由需要vue所以在瘦削 文件中要导入vue
import Router from 'vue-router'
//router-link router-view 可以在全局任何地方使用
Vue.use(Router);//插件  所有vue的插件都需要use一下，use后默认会调用install方法
import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import Articlehaha from '../components/Articlehaha.vue'
import Aboutme from '../components/Aboutme.vue'
import Introduce from '../components/Introduce.vue'
//默认导出路由实例
export  default new Router({
    linkActiveClass:'haha',
    linkExactActiveClass:'xixi',
    routes:[
        /*默认路由*/
        {path:'',component:Home},
        {path:'/home',component:Home},
        {path:'/profile',component:Profile,children:[
            {path:'',component:Aboutme},
            {path:'aboutme',component:Aboutme},
            {path:'introduce',component:Introduce},
        ]},
        //形参，但是是随机的 this.$route.params
        {path:'/articlehaha/:id/:name',component:Articlehaha},
    ]
})


