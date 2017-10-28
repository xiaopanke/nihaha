<template>
    <div class="nav">
        <ul>
          <li><router-link to="/" exact>首页</router-link></li>
          <li><router-link to="/list">列表</router-link></li>
          <li><router-link to="/collect">收藏</router-link></li>
          <li><router-link to="/add">添加</router-link></li>
        </ul>
    </div>
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
<style scoped lang="less">
  .nav{position: fixed;width:100%;border-top: 1px solid darkmagenta;bottom:0;
    ul{display: flex;background: #fff;}
    li{flex:1; text-align: center; line-height: 60px;
      display: flex;align-items: center;
    }
    a{width:100%;}
    .router-link-active{background: darkorchid; color:#fff;}
  }
</style>
