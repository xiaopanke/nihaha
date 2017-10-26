<template>
    <div>
        {{msg}}
        <button @click="gotoprofile">去个人页</button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: 'home'
            }
        },
        created(){

        },
        methods: {
            gotoprofile(){
                //路径跳转，将当前的路径放到历史管理中
                //this.$router.push('/profile/introduce')


                //this.$router.go(-1) //返回按键


                this.$router.replace('/profile/introduce')//跳转页面后不留痕迹
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>
div{border:1px solid red;}
</style>