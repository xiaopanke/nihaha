<template>
    <ul>
      <router-link tag="li" to="/" exact><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
      <router-link tag="li" to="/list"><i class="iconfont icon-liebiaoyetuanqi"></i><span>列表页</span></router-link>
      <router-link tag="li" to="/collect"><i class="iconfont icon-shoucang"></i><span>收藏</span></router-link>
      <router-link tag="li" to="/add"><i class="iconfont icon-icon02"></i><span>添加</span></router-link>
    </ul>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        created(){

        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<!--
  flex布局
  display:flex;给父级加
  flex:1 ;给子级加，平均分
  flex-direction:column 给父级加 (纵向排列，默认是横列排列)
  justfity-content:center; 垂直
  align-item:center 水平居中
-->
<style scoped lang="less">

  ul{
    border-top:1px solid #ccc;
    background:#fff;
    position: fixed;
    width:100%;
    left:0;
    bottom:0;
    height:60px;
    display: flex;
    li{
      display: flex;
      flex:1;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      transform: scale(1);
    }
    .router-link-active{transition: all .1s; transform: scale(1.1); text-shadow:0px 3px 10px #f00;color:#ff0000;}
  }
</style>
