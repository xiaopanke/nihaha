<template>
    <div>
      <div class="loader">
        <div class="loading-6">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
            }
        },
        created(){

        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped>
  .loader{position: fixed;top:50%;left:50%;transform: translate(-50%,-50%);}
  @-webkit-keyframes loading-6{
    0%{left:100px;top:0;}
    80%{left:0;top:0;}
    85%{left:0;top:-20px;width:20px;height:20px;}
    90%{width:40px;height:20px;}
    95%{width:40px;height:20px;left:100px;top:-20px;}
    100%{left:100px;top:0;}
  }
  .loading-6{width:80px;height:20px; position:relative}
  .loading-6 i{ display:block;width:20px;height:20px;border-radius:50%; background:rgba(255,0,0,.5);margin-right:10px; position:absolute;box-shadow: 0 0 1px 1px #f00;}
  .loading-6 i:nth-child(1){-webkit-animation:loading-6 2s linear 0s infinite;}
  .loading-6 i:nth-child(2){-webkit-animation:loading-6 2s linear -.4s infinite;}
  .loading-6 i:nth-child(3){-webkit-animation:loading-6 2s linear -.8s infinite;}
  .loading-6 i:nth-child(4){-webkit-animation:loading-6 2s linear -1.2s infinite;}
  .loading-6 i:nth-child(5){-webkit-animation:loading-6 2s linear -1.6s infinite;}

</style>
