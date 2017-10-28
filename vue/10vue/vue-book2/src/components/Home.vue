<template>
  <div>
    <mheader :backtemp="true"><div slot="title">首页</div></mheader>
    <div class="content">
      <slider :swiperSlides="swiperSlides"></slider>
      <ul class="hot">
        <li v-for="h in hot">
          <img :src="h.bookCover" alt="">
          <h3>{{h.bookName}}</h3>
          <span>{{h.bookPrice}}</span>
        </li>
      </ul>
    </div>
    <mfooter></mfooter>
  </div>
</template>

<script>
  import mheader from './base/Header'
  import mfooter from './base/Footer'
  import slider from './base/Slider'
  import axios from 'axios'
  export default {
      data(){
          return {
            swiperSlides:[],
            hot:[]
          }
      },
      components:{
        mheader,
        mfooter,
        slider
      },
      created(){
        this.getsliders();
        this.gethot();
      },
      methods:{
          getsliders(){
            axios.get('/api/sliders').then((res)=>{
                this.swiperSlides=res.data
            })
          },
          gethot(){
            axios.get('/api/hot').then((res)=>{
              this.hot=res.data
            })
          }
      }
  }
</script>

<style scoped lang="less">
.hot{
   display: flex;
  flex-wrap: wrap;
  li{
    display: flex;flex: 33.3%; flex-direction: column; padding:10px; box-sizing: border-box;
    img{width:100%;height:100px;}
  }
}
</style>
