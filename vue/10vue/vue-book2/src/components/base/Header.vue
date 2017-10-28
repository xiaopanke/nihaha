<template>
    <div class="header"><i @click="back" v-if="backtemp"><</i><slot name="title"></slot></div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        props:{
          backtemp:{
              type:Boolean,
              default:true
          }
        },
        created(){

        },
        methods: {
          back(){
              this.$router.go(-1)
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .header{background:#fff; line-height: 50px; position: fixed;width:100%;left:0;top:0;border-bottom:1px solid  darkmagenta; text-align: center;
    i{ position: absolute;left:20px;font-size: 30px; font-style: normal}
  }
</style>
