<template>
    <div>
        <router-link to="/profile/aboutme">关于我</router-link>
        <router-link to="/profile/introduce">简介简介</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: 'profile'
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

</style>