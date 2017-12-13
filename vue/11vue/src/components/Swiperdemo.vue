<template>
  <div class="">
    <div class="item01">
      <swiper :options="swiperOption" :swiperimg="swiperimg"></swiper>
    </div>
    <!-- 
    <div class="item02">
      <p>你想要什么配置呢：</p>
      <ul>
        <li>
          自动播放时间: <input type="text" v-model="swiperOption.autoplay" name="">
        </li>
        <li>
          是否显示下面的小按钮:
          <label for="">是<input type="radio" v-model="swiperOption.dotbtn" :value="true" ></label>
          <label for="">否<input type="radio" v-model="swiperOption.dotbtn" :value="false" ></label>
        </li>
        <li>
          是否显示左右的小按钮:
          <label for="">是<input type="radio" :value="true" v-model="swiperOption.prevnextbtn" ></label>
          <label for="">否<input type="radio" :value="false" v-model="swiperOption.prevnextbtn" ></label>
        </li>
        <li>
          运动的速度:
          <input type="text" v-model="swiperOption.speed" >
        </li>
        <li>
          是否循环播放:
          <label for="">是<input type="radio" :value="true" v-model="swiperOption.loop" ></label>
          <label for="">否<input type="radio" :value="false" v-model="swiperOption.loop" ></label>
        </li>
      </ul>
    </div>
     -->
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
           autoplay: 2000,//自动播放时间
           dotbtn :true, //是否显示下面的小点点
           prevnextbtn:true, //是否显示左右的按钮
           speed:.2,//运动的速度 以s为单位
           loop:true,
           dotbtnstyle:{
             default:`width:10px;height:10px;boder:1px solid red;margin:0 5px;`,
             cur:`width:20px;height:20px;border:1px solid yellow;margin:0 5px;`
           }
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
li{ margin-bottom: 10px;}
input{border:1px solid blue; padding-left: 10px;}
label{ margin-right: 10px;}
</style>
