<template>
  <div>
    <!--根据不同的路由，显示不同的组件-->
    <transition name="haha">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </transition>
    <tab></tab>
  </div>
</template>

<script>
  import tab from './base/Tab'
export default {
    components:{
      tab
    }
}
</script>

<style>
/*默认的公共样式，如果样式较多，可以抽离出，通过import引入样式*/
  *{ margin:0;padding:0}
  li{ list-style:none}
  a{ text-decoration:none}
  input,button{-webkit-appearance:none}
  html,body{font-size:14px;color:#666; }
.content{width:100%;position: fixed;top:51px;left:0;right:0;bottom:60px;
  overflow-y: scroll;overflow-x: hidden}
.iconfont{transform: scale(1);}

.haha-enter{transform: translateX(100%);}
.haha-enter-active{transition: all .2s;}
.haha-leave-active{transition: all .2s;transform: translateX(0);}
</style>
