<template>
  <div class="">
      <ul>
        <li>
          <router-link to='/eventbus'>eventbusa</router-link>
          <router-link to='/uploadimg'>改头像</router-link>
          <router-link to='/stylus'>stylus</router-link>
          <router-link to='/created'>created</router-link>
        </li>
      </ul>
      
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      msg: '123'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
