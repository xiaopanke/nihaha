<template>
  <div class="">
      {{$store.state.count}}
      {{this.$store.state.count}}
      <!-- 但是这样获取很麻烦，所以我们可以把这一长串的东西放到computed里面 -->
      {{count}}
      {{count2}}
      <!-- 获取getters里的值 -->
      {{this.$store.getters.count}}
      {{getcount}}
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState(['count','count2']),
    ...mapGetters({
      getcount:'count' //这里要起一个别名，要不就会与上面的count重名
    })
  }
}
</script>

<style scoped>
</style>
