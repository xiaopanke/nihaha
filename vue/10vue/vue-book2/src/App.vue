<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{margin:0;padding:0}
  li{list-style: none;}
  a{text-decoration: none;}
  .content{position: fixed;width:100%;top:50px;overflow-y: scroll;right:0;left:0;bottom:60px;}
</style>
