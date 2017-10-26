<template>
    <div>
        <div>
            <div class="col-md-3">
                <nav class="nav nav-stacked">
                    <li><router-link to="/profile/aboutme">关于我</router-link></li>
                    <li><router-link to="/profile/introduce">简介简介</router-link></li>
                </nav>
            </div>
            <div class="col-md-9">
                <!--因为是profile的子路由，所以默认找的是profile中的router-view-->
                <router-view></router-view>
            </div>
        </div>
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