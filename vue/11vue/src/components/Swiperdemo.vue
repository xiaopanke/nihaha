<template>
  <div class="">
    <div class="item01">
      <swiper :options="swiperOption" :swiperimg="swiperimg"></swiper>
    </div>

    <div class="">
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
    </div>
  </div>

</template>

<script>
// import swiper from './Swiperloop'
import swiper from './Swiper'
  export default {
    data() {
      return {
        swiperOption: {
           autoplay: 1000,//自动播放时间
           dotbtn :true, //是否显示下面的小点点
           prevnextbtn:true, //是否显示左右的按钮
           speed:.2,//运动的速度 以s为单位
           loop:true
        },
        swiperimg:[
          {
            href:'https://www.baidu.com/',
            src:require('../assets/swiper1.jpg')
          },
          {
            href:'https://www.taobao.com/',
            src:require('../assets/swiper2.jpg')
          },
          {
            href:'https://www.jd.com/',
            src:require('../assets/swiper3.jpg')
          },
          // {
          //   href:'https://www.baidu.com/',
          //   src:require('../assets/swiper4.jpg')
          // },
          // {
          //   href:'https://www.taobao.com/',
          //   src:require('../assets/swiper5.jpg')
          // },
          // {
          //   href:'https://www.jd.com/',
          //   src:require('../assets/swiper6.jpg')
          // }
        ]
      }
    },
    components:{
      swiper
    }
  }
</script>
<style scoped>
</style>
