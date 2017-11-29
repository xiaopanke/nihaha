<template>
  <div class="" v-if="show">
    {{msg}}
  </div>
</template>

<script>
export default {
	data () {
		return {
            show:true
		}
    },
    props:{
        msg:{
            default:'我是一个提示框'
        }
    },
    beforeCreate () {
        console.group('%c%s', 'color:red', 'beforeCreate 创建前状态》')
    },
    created () {
        console.group('%c%s', 'color:red', 'created 创建完毕状态》')
    },
    beforeMount () {
        console.group('%c%s', 'color:red', 'beforeMount 挂载前状态》')
    },
    mounted () {
        console.group('%c%s', 'color:red', 'mounted 挂载状态》')
    },
    beforeUpdate () {
        console.group('%c%s', 'color:red', 'beforeUpdate 更新前状态》')
    },
    updated () {
        console.group('%c%s', 'color:red', 'updated 更新状态》')
        setTimeout(()=>{
            this.show=false
        },3000)
    },
    beforeDestroy () {
        console.group('%c%s', 'color:red', 'beforeDestroy 破前状态》')
    },
    destroyed () {
        console.group('%c%s', 'color:red', 'destroyed 破坏状态》')
    }

}
</script>
<style scoped>
</style>
