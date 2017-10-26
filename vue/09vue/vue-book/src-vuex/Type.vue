<template>
    <div>
        {{count}}
       {{type}}
    </div>
</template>
<script>
    import {mapState,mapGetters} from 'vuex'
    export default{
        data(){
            return {
                msg: 123
            }
        },
        computed:{
          ...mapGetters(['type']),
          ...mapState(['count'])
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
