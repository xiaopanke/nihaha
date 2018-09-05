<template>
  <div class="">

      <span @click="incrementcounter">  {{counter}}</span>
  </div>
</template>
<script>
export default {

  data () {
    return {
        counter:0
    }
  },
  methods:{
    incrementcounter(){
      this.$emit('increment');
      this.counter++;
    }
  }
}
</script>
<!-- 你可以在一个组件中同时使用有作用域和无作用域的样式： -->
<style>

/* 全局样式 */
</style>

<style scoped>
/* 本地样式 */
</style>
