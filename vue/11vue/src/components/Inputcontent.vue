<template>
  <div class="">
    abc <br>
    abc <br>
    abc <br>
    abc <br>
    abc <br>
    abc <br>
    abc <br>
    <span @click="showinputfn">回复</span>
    <inputson v-if="showinput" @closefn="closefnparent"></inputson>
    <inputleng></inputleng>
  </div>
</template>

<script>
import inputson from './Inputson'
import inputleng from './Inputleng'
export default {
	data () {
		return {
      showinput:false,
      bodyscroll:0
		}
	},
	created(){

	},
	mounted(){
    
  },
  components:{
    inputson,
    inputleng
  },
  methods:{
    showinputfn(ev){
      this.showinput=true;
      console.log(document.documentElement.scrollTop)
      this.bodyscroll=document.documentElement.scrollTop;
      document.body.style.position='fixed';
      document.body.style.top=-this.bodyscroll+'px';
    },
    closefnparent(){
      this.showinput=false
      document.body.style.position='static'
    }
  }

}
</script>
<style scoped>
.hidden{display: none;}
  .progress{ position: relative;padding:0;}
  .progress span{display: block;background: red;height: 20px; position: absolute;top:0;left:0 }

</style>
