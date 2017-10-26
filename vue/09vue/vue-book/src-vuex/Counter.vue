<template>
    <div>
        {{$store.state.count}}
      <button @click="add2">+</button>
      <button @click="reduce2">-</button>
    </div>
</template>
<script>
  import {mapState,mapMutations} from  'vuex'
  console.log(mapState(['count']))
    export default{
        data(){
            return {
                msg: 123
            }
        },
        created(){

        },
      computed:{
        ...mapState(['count']) //将ccount直接
      },
        methods: {
          ...mapMutations(['add','reduce']),
            add2(){
                this['add'](2)
            },
            reduce2(){
                this['reduce'](5)
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>
