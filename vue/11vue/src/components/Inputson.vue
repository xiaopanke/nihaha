<template>
  <div class="">
    <div class="mask"></div>
    <div class="input">
      <textarea name="" id="" cols="30" rows="3" autofocus></textarea>
      <span>发送</span>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
      showinput:false
		}
	},
	created(){

	},
	mounted(){

	},
  methods:{
    showinputfn(){
        this.showinput=true;
    }
  }

}
</script>
<style scoped>
.mask{position: fixed;width:100%;height: 100%;left:0;top:0;bottom:0;right:0;background: rgba(0,0,0,.5)}
.input {display: flex;background: #fff;position: fixed;width:100%; bottom:0;left:0; padding:10px; align-items: center}
.input textarea{padding:10px;flex: 5;border:1px solid #ccc; resize: none;outline: none;}
.input span{flex: 1; text-align: center;}
</style>
