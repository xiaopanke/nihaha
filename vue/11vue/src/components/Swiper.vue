<template>
  <div class="wrap">
    {{options}}
    <!-- 图片 -->
    <ul class="swiper" ref="swiper" @touchstart='startfn($event)' @touchmove='movefn($event)' @touchend='endfn($event)'>
        <li class="item" :style="{'width':w+'px'}">
          <img :src="swiperimg[swiperimg.length-1].src" ref="img" />
        </li>
        <li class="item" v-for="(item,index) in swiperimg" :style="{'width':w+'px'}" :key="index">
          <img :src="item.src" ref="img" />
        </li>
        <li class="item" :style="{'width':w+'px'}">
          <img :src="swiperimg[0].src" ref="img" />
        </li>
    </ul>
    <!--  左右按钮-->
    <span class="prevbtn" @click='go(-1)'><</span>
    <span class="nextbtn" @click="go(1)">></span>
    <div class="dotbtn">
        <span v-for="(item,index) in swiperimg" :key2="index" :style="{'background': (index==(iNow-1) ?  'green' : '')}">{{index+1}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      x:-document.documentElement.getBoundingClientRect().width,//获取屏幕的宽度
      w:document.documentElement.getBoundingClientRect().width,//获取屏幕的宽度
      oUl:'',
      aLi:'',
      iNow:1,
      bReady:true,
      haha:'',
      downX:'',
      disX:''
    }
  },
  mounted(){
    this.oUl=this.$refs.swiper;
    this.aLi=this.oUl.children;
    this.initswiper();

  },
  props:['options','swiperimg'],
  methods:{
    initswiper(){
      this.oUl.style.width=(this.swiperimg.length+2)*this.w+'px';
      this.haha=this.iNow;
      this.oUl.style.WebkitTransform='translateX('+this.x+'px)';
    },
    go(step){
      this.index+=step;
      this.transX=this.index*this.w
      this.$refs.swiper.style.transitionDuration = .2+'s';
      this.$refs.swiper.style.transform=`translateX(-${this.index*this.w}px)`
    },
    startfn(ev){
      if(this.haha==this.iNow){this.bready=true;}
       if(this.bready==false)return;
       this.bready=false;

       this.oUl.style.WebkitTransition='none';
       this.downX=ev.targetTouches[0].pageX;
       this.disX=this.downX-this.x;
       console.log(this.downX)
       console.log(this.disX)
    },
    movefn(ev){
        this.oUl.style.WebkitTransform='translateX('+(ev.targetTouches[0].pageX-this.disX)+'px)';
    },
    endfn(ev){
      var upX=ev.changedTouches[0].pageX;
      this.oUl.style.WebkitTransition='.2s all ease';
      if(Math.abs(upX-this.downX)>50){
          if(this.downX>upX){
              this.iNow++;
              if(this.iNow==this.aLi.length){this.iNow=this.aLi.length-1;}
          }else{
              this.iNow--;
              if(this.iNow==-1){this.iNow=0;}

          };
      }
      this.x=-this.iNow*this.aLi[0].offsetWidth;
      this.oUl.style.WebkitTransform='translate3d('+this.x+'px,0,0)';

      this.oUl.addEventListener('transitionend',this.tend,false);

    },
    tend(){
      this.bready=true;
      this.oUl.removeEventListener('transitionend',this.tend,false);
      if(this.iNow==this.aLi.length-1){
          this.iNow=1;
          this.x=-this.iNow*this.aLi[0].offsetWidth;this.oUl.style.WebkitTransition='none';
          this.oUl.style.WebkitTransform='transitionend('+this.x+'px,0,0)';
      }
      if(this.iNow==0){
          this.iNow=this.aLi.length-2;
          this.x=-this.iNow*this.aLi[0].offsetWidth;this.oUl.style.WebkitTransition='none';
          this.oUl.style.WebkitTransform='transitionend('+this.x+'px,0,0)';
      }
      this.haha=this.iNow;
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.wrap{overflow: hidden;position: relative;}
.swiper{ }
.swiper:after{content: '';display:block; clear: both;}
.item{float: left;}
.swiper a{display: block;}
.swiper img{width: 100%}
.prevbtn,.nextbtn{position: absolute;top:50%;transform: translateY(-50%);font-size: 30px; color: #fff;z-index: 2;}
.prevbtn{left:20px;}
.nextbtn{right:20px;}
.dotbtn { display: flex;align-items: center; justify-content:center;}
.dotbtn span{width:20px;height: 20px;border-radius: 50%; margin:0 10px;background: red; text-align: center;color: #fff;}
</style>
