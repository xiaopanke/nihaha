<template>
  <div class="">
    <span>{{aDouble}}</span>
    <span>{{aPlus}}</span>
    <span>{{aPlus}}</span>
    <span>{{aDouble}}</span>
    <span @click="haha">设置</span>
    <span @click="heihei">加加</span>
  </div>
</template>

<script>
export default {
	data () {
		return {
		a: 1
		}
	},
  computed: {
    // 仅读取
    aDouble: function () {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  },
  methods:{
    haha(){
      this.aPlus=3;
    },
    heihei(){
      this.a++;
    }
  }


}
</script>
<style scoped>
</style>
