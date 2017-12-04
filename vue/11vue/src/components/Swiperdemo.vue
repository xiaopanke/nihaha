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
import swiper from './Swiper'
  export default {
    data() {
      return {
        swiperOption: {
           autoplay: 3500,
          // setWrapperSize :true,
          // pagination : '.swiper-pagination',
          // observeParents:true,
          // autoplayDisableOnInteraction: false,
          // loop:true
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
