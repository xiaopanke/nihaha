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
            src:'http://upload.ouliu.net/i/20171206145305sgj8m.jpeg'
          },
          {
            href:'https://www.taobao.com/',
            src:'http://upload.ouliu.net/i/201712061454195ee4v.jpeg'
          },
          {
            href:'https://www.jd.com/',
            src:'http://upload.ouliu.net/i/201712061454346k3x9.jpeg'
          },
          {
            href:'https://www.baidu.com/',
            src:'http://upload.ouliu.net/i/20171206145538l0s1b.jpeg'
          },
          {
            href:'https://www.taobao.com/',
            src:'http://upload.ouliu.net/i/20171206145557w60zh.jpeg'
          },
          {
            href:'https://www.jd.com/',
            src:'http://upload.ouliu.net/i/20171206145617jnlz6.jpeg'
          }
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
