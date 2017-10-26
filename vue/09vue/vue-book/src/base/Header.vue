<template>
    <div class="mheader">
      <i class="iconfont icon-houtui" v-if="back" @click="go"></i>
      <slot></slot>
    </div>
</template>
<script>
    export default{
        props:{
            back:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {

            }
        },
        created(){

        },
        methods: {
            go(){
              //this.$router.go(-1)
              this.$router.back()
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.mheader{border-bottom:1px solid #ccc;line-height: 50px;position: fixed;width:100%;left:0;top:0; text-align: center;font-size: 16px;background: #fff;
  i{
    position: absolute;left:20px;font-size: 20px;

  }
}
</style>
