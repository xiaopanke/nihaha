<template>
  <div class="">
      {{total}}
      <parentchild1 v-on:increment="incrementTotal"></parentchild1>
      <parentchild1 v-on:increment="incrementTotal"></parentchild1>
  </div>
</template>
<script>
import parentchild1 from './Parentchild1.vue'
export default {
  data () {
    return {
        total:0
    }
  },
  methods:{
    incrementTotal(){
      this.total++;
    }
  },
  components:{
    parentchild1
  }
}
</script>

<style scoped>
</style>
