<template>
  <div class="">
      {{$store.state.count}}
      {{this.$store.state.count}}
      <!-- 但是这样获取很麻烦，所以我们可以把这一长串的东西放到computed里面 -->
      {{count}}
      {{count2}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState(['count','count2'])
  }
}
</script>

<style scoped>
</style>
