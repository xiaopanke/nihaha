<template>
    <div>
        {{count}}
        {{$store.state.count}}
    </div>
</template>
<script>
    import {mapState,mapGetters} from 'vuex'
    console.log(mapState)
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
        components: {}
    }
</script>
<style scoped>

</style>
