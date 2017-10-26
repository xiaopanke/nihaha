<template>
    <div>
        <!--在html中不加需要加this-->
        文章id{{$route.params.id}}
        文章name{{$route.params.name}}
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: ''
            }
        },
        watch:{
            $route(){//路径参数改变时，可以使用watch监控到路由的变化
                alert(1);
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