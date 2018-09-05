<template>
  <div class="">
      <span>always {{a}}</span>
      <span v-once>once {{a}}</span>
      <span @click="heihei">加</span>
  </div>
</template>

<script>
var mixin = {
  created: function () { console.log(1) }
}
var mixin2 = {
  created: function () { console.log(3) }
}
export default {
	data () {
		return {
		a: 1
		}
	},
  computed: {

  },
  methods:{
    heihei(){
      this.a++
    }
  },
  created: function () { console.log(2) },
  mixins: [mixin,mixin2]

}

</script>
<style scoped>
</style>
