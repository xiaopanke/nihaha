<template>
    <div>
        <!--导航-->
        <tab></tab>
        <!--内容-->
        <router-view></router-view>
    </div>
</template>
<script>
    import Tab from './components/Tab.vue'
    export default{
        data(){
            return {
                msg:123
            }
        },
        created(){

        },
        methods:{

        },
        computed:{

        },
        components:{
            Tab
        }
    }
</script>
<style>
    /*可以默认app.vue里面的样式是全局的*/
.list-active{color: blue !important;}
</style>