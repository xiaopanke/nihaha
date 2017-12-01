<template>
  <div class="">
    <div class="text-center">
  		<button class="btn btn-default upbtn" @click='uploadclick'>上传文件</button>
  		<input ref="upbtninput" @change='uploadfn($event)' type="file" class="hidden upbtninput"  accept=".csv,.xlsx">
  		<button class="btn btn-default">下载模板</button>
  		<br />文件名：<span class="name">{{file.filename}}</span>
          <br />文件上传进度：
          <div class="row">
              <div class="progress col-md-6 col-md-offset-3"><span :style="{'width':file.fileprogress+'%'} "
              ></span></div>
          </div>
  	</div>
  </div>
</template>

<script>
export default {
	data () {
		return {
      file:{
        filename:'',
        fileprogress:0
      }
		}
	},
	created(){

	},
	mounted(){

	},
  methods:{
    uploadclick(){
        this.$refs.upbtninput.click();
    },
    uploadfn(e){
      let target = e.target || e.srcElement
      this.file.filename=target.files[0].name
      let file = target.files[0]
      var total = file.size;
      var reader = new FileReader()
      console.log(reader)
      reader.readAsDataURL(file);
      reader.onload = (data) => {
          let res = data.target || data.srcElement
          //this.result
      }
      reader.onprogress=(e)=>{
        this.file.fileprogress=(e.loaded/total)*100
        console.log(this.file.fileprogress)
      }
      reader.onabort=function () {
          console.log("文件上传中断,请重试")
      };
      reader.onerror=function () {
          console.log("文件上传出错，请重试")
      };

    }
  }

}
</script>
<style scoped>
.hidden{display: none;}
  .progress{ position: relative;padding:0;}
  .progress span{display: block;background: red;height: 20px; position: absolute;top:0;left:0 }

</style>
