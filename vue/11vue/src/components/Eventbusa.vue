<template>
  <div class="hello">
    <span @click="gob">我是a页面的按钮</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '123'
    }
  },
  beforeCreate () {
   console.group('%c%s', 'color:green', 'beforeCreate 创建前状态===============组件a》')
 },
 created () {
   console.group('%c%s', 'color:green', 'created 创建完毕状态===============组件a》')
 },
 beforeMount () {
   console.group('%c%s', 'color:green', 'beforeMount 挂载前状态===============组件a》')
 },
 mounted () {
   console.group('%c%s', 'color:green', 'mounted 挂载状态===============组件a》')
 },
 beforeUpdate () {
   console.group('%c%s', 'color:green', 'beforeUpdate 更新前状态===============组件a》')
 },
 updated () {
   console.group('%c%s', 'color:green', 'updated 更新状态===============组件a》')
 },
 beforeDestroy () {
   bus.$emit('get', {
        item: 'a的item ',
        date: 'a的date'
      })
   console.group('%c%s', 'color:green', 'beforeDestroy 破前状态===============组件a》')
 },
 destroyed () {
   console.group('%c%s', 'color:green', 'destroyed 破坏状态===============组件a》')
 },

  methods:{
    gob(){
      this.$router.replace({path: '/eventbusb'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
