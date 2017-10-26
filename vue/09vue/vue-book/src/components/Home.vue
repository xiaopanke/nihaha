<template>
  <div>
    <mheader>首页</mheader>
    <div class="content">
      <swiper :swiperSlides="sliders"></swiper>
      <!--获取热闹图书-->
      <loading v-if="loadtmp"></loading>
      <template v-else>
        <h3>热门图书</h3>
        <h3 v-if="!hot.length">暂无数据</h3>
        <ul class="hot">
          <li v-for="h in hot">
            <img v-lazy="h.bookCover" alt="">
            <span>{{h.bookName}}</span>
            <span>{{h.bookPrice}}</span>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
  import mheader from '../base/Header'
  import swiper from '../base/Swiper'
  import loading from '../base/Loading'
  import axios from 'axios'
  export default {
      data(){
          return {
              sliders:[],
              hot:[],
              loadtmp:true

          }
      },
      created(){
        this.getSlider();
        this.getHot();
      },
      methods:{
          getSlider(){
              axios.get('/api/sliders').then((res)=>{
                  this.sliders=res.data
              })
          },
          getHot(){
            axios.get('/api/hot').then((res)=>{
              setTimeout(()=>{
                this.hot=res.data
                this.loadtmp=false;
              },1000)
            })
          }
      },
      components:{
          mheader,
          swiper,
          loading
      }
  }
</script>

<style scoped lang="less">
  @color1:red;
.hot{
  display: flex;
  flex-wrap:wrap;
  li{
    width: 33.3%;
    display: flex;
    padding:5px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    img{
      height: 150px;
      width:100%
    }
    :nth-child(3){font-weight: bold;color: @color1;}
  }
}
</style>
