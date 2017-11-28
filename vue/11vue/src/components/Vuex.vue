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
      <span @click='add(6)'>加6</span>
      <!-- 通过dispath派发一个actions -->
      <span @click='$store.dispatch("add",10)'>加10</span>
      <span @click='addhaha(11)'>加11</span>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  
  data () {
    return {
      
    }
  },
  methods:{
    ...mapActions({
      addhaha:'add'
    }),
    ...mapMutations(['add'])
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
