<template>
  <div class="hello">
    bb
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
   console.group('%c%s', 'color:red', 'beforeCreate 创建前状态===============组件b》')
 },
 created () {
   console.group('%c%s', 'color:red', 'created 创建完毕状态===============组件b》')
   bus.$on('get', this.myhandle)
 },
 beforeMount () {
   console.group('%c%s', 'color:red', 'beforeMount 挂载前状态===============组件b》')
 },
 mounted () {
   console.group('%c%s', 'color:red', 'mounted 挂载状态===============组件b》')
 },
 beforeUpdate () {
   console.group('%c%s', 'color:red', 'beforeUpdate 更新前状态===============组件b》')
 },
 updated () {
   console.group('%c%s', 'color:red', 'updated 更新状态===============组件b》')
 },
 beforeDestroy () {
   bus.$off('get', this.myhandle)
   console.group('%c%s', 'color:red', 'beforeDestroy 破前状态===============组件b》')
 },
 destroyed () {
   console.group('%c%s', 'color:red', 'destroyed 破坏状态===============组件b》')
 },
  methods: {
    myhandle (val) {
        console.log(val, '这是从上个页面传递过来的参数')
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
