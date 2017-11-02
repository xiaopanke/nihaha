<template>
  <div class="">
    {{data.d.value1}}
    <!-- <ul>
      <li v-for="i in item">
          <div v-if="i.type==1">
              ...
          </div>
          <div v-else-if="i.type==2">
            ...
          </div>
          <div v-else>
            ...
          </div>
      </li>
    </ul> -->
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
