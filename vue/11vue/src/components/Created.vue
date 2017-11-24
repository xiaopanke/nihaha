<template>
  <div class="">
    <span ref="span" id="span">我是span</span>
  </div>
</template>

<script>
export default {
	data () {
		return {
		msg: '123'
		}
	},
	created(){
		console.log('created')
		console.log(this.$refs.span)
		console.log(this)
		this.$nextTick(()=>{
			console.log(1)
			console.log(this.$refs.span)
		})
	},
	mounted(){
		console.log('mounted')
		console.log(this.$refs.span)
		console.log(this)
	}

}
</script>
<style scoped>
</style>
