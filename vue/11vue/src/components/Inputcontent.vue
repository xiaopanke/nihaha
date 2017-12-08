<template>
  <div class="">
    <span @click="showinput=true">回复</span>
    <inputson v-if="showinput" @closefn="showinput=false"></inputson>
    <inputleng></inputleng>
  </div>
</template>

<script>
import inputson from './Inputson'
import inputleng from './Inputleng'
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
  components:{
    inputson,
    inputleng
  },
  methods:{
  }

}
</script>
<style scoped>
.hidden{display: none;}
  .progress{ position: relative;padding:0;}
  .progress span{display: block;background: red;height: 20px; position: absolute;top:0;left:0 }

</style>
