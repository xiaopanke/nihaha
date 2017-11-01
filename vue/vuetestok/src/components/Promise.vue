<template>
  <div class="">
    {{data.d.value1}}
  </div>
</template>

<script>
import jsonData from '../../static/promise.json'
export default {
  name: 'dash',
  data() {
    return {
      data: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.callApi()

        .then((responseData) => {
          this.data = responseData;

        })
    },

    callApi() {
      return Promise.resolve(jsonData)
    }
  }
}
</script>
<style scoped>

</style>
