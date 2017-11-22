<template>
  <div>
    更改头像
    <span class="img" @click.stop="uploadHeadImg">
      <img :src="imgurl" alt="" v-autofix>
    </span>
      <input type="file" accept="image/*"  @change="handleFile" ref="hiddenInput" />
  
  </div>
</template>

<script>

export default {
  
  data () {
    return {
      imgurl: require('../assets/timg.jpeg')
    }
  },
  components:{
  },
  methods:{
    // 打开图片上传
    uploadHeadImg () {
      this.$refs.hiddenInput.click()
    },
    handleFile(e){
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        let img = new Image()
        img.onload = () => {
          setTimeout(()=>{
            this.imgurl=res.result
          },2000)
        }
        img.src = res.result
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img{display: block;width:100px;height: 100px; border:1px solid #000; margin: 30px auto;overflow: hidden}
img{width:100%;}
input{ display: none;}
</style>
