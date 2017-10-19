<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">李盼珂</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><router-link to="/home">首页</router-link></li>
                    <li><router-link to="/profile">个人页</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: ''
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