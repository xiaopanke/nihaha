<template>
  <div>
    {{$store.state.count}}
    <button @click="add">+</button>
    <button @click="reduce">-</button>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: 123
      }
    },
    created(){

    },
    methods: {
      add(){
        this.$store.commit('add',2)
      },
      reduce(){
        this.$store.commit('reduce',2)
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped>

</style>
