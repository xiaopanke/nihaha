<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index"><img :src="slide" alt="" style="width:100%"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          observeParents:true,
          autoplayDisableOnInteraction: false,
          loop:true
        }
      }
    },
    props:['swiperSlides']
  }
</script>
