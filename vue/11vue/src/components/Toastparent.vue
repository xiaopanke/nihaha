<template>
  <div class="">
      toastparent
      <span @click="showtoast">按钮，点击之后出现toast</span>
      <Toast :msg="msg" />
  </div>
</template>
<script>
import Toast from '../base/toast'
export default {
  data () {
    return {
      msg:123
    }
  },
  components:{
    Toast
  },
  methods:{
    showtoast(){
      this.msg=576
    }
  }
}
</script>

<style scoped>
</style>
