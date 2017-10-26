<template>
    <div>
      <Counter></Counter>
      <Counter2></Counter2>
      <Counter3></Counter3>
      <type></type>
    </div>
</template>
<script>
  import Counter from  './Counter'
  import Counter2 from  './Counter2'
  import Counter3 from  './Counter3'
  import Type from  './Type'
    export default{
        data(){
            return {
                msg: 123
            }
        },
        created(){

        },
        methods: {},
        computed: {},
        components: {
          Counter,
          Counter2,
          Counter3,
          Type
        }
    }
</script>
<style scoped>

</style>
