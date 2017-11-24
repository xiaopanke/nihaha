<template>
  <div id="app">
    <!-- <Navbar></Navbar> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Nav'
export default {
  components:{
    Navbar
  }
}
</script>

<style>
*{margin:0;padding:0;}
a{text-decoration: none;}
</style>
