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
    <div class="dotbtn" ref="dotbtn">
        <span v-for="(item,index) in swiperimg" :key2="index" :style="{'background': (index==(iNow-1) ?  'green' : '')}" @click='dotclick(index)'>{{index+1}}</span>
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
      bReady:true, //限制点击，当动画正在动时，将不能再点击
      downX:'',
      disX:'',
      timer:'', //自动播放时间id
      aSpan:''
    }
  },
  mounted(){
    this.oUl=this.$refs.swiper;
    this.aLi=this.oUl.children;
    this.aSpan=this.$refs.dotbtn.children;
    this.initswiper();
  },
  props:['options','swiperimg'],
  methods:{
    initswiper(){
      this.oUl.style.width=(this.swiperimg.length+2)*this.w+'px';
      this.oUl.style.WebkitTransform='translateX('+this.x+'px)';
      this.autoplayfn();
    },
    go(step){
      if(this.bready==false)return;
      this.bready=false;
      clearInterval(this.timer)
      this.iNow+=step;
      this.panduaniNow()
      this.dongqilai(1)
    },
    startfn(ev){
       if(this.bready==false)return;
       this.bready=false;
       this.oUl.style.WebkitTransition='none';
       this.downX=ev.targetTouches[0].pageX;
       this.disX=this.downX-this.x;
    },
    movefn(ev){
        this.oUl.style.WebkitTransform='translateX('+(ev.targetTouches[0].pageX-this.disX)+'px)';
    },
    endfn(ev){
      var upX=ev.changedTouches[0].pageX;
      if(Math.abs(upX-this.downX)>50){
          this.downX>upX ? this.iNow++ : this.iNow--
          this.panduaniNow()
      }
      this.dongqilai(1)
    },
    tend(){
      this.bready=true;
      this.oUl.removeEventListener('transitionend',this.tend,false);
      if(this.iNow==this.aLi.length-1){
          console.log('this.iNow==this.aLi.length-1')
          this.iNow=1;
      }
      if(this.iNow==0){
        console.log('this.iNow==0')
          this.iNow=this.aLi.length-2;
      }
      this.dongqilai(0)
    },
    dotclick(index){
      if(this.bready==false)return;
      this.bready=false;
      clearInterval(this.timer)
      this.iNow=index+1;
      this.dongqilai(1)
    },
    panduaniNow(){
      if(this.iNow==this.aLi.length){this.iNow=this.aLi.length-1;}
      if(this.iNow==-1){this.iNow=0;}
    },
    dongqilai(type){
      // 如果传0 表示，要清掉动画 ，传1 表示正常动画
      if(type==0){
        this.oUl.style.WebkitTransition='none';
        //this.haha=this.iNow;
      }else{
        this.oUl.style.WebkitTransition='.5s all ease';
        this.oUl.addEventListener('transitionend',this.tend,false);
        this.dotsspancur()
      }
      this.x=-this.iNow*this.w;
      this.oUl.style.WebkitTransform='translate3d('+this.x+'px,0,0)';
      this.autoplayfn();
    },
    autoplayfn(){
      clearInterval(this.timer)
      this.timer=setInterval(()=>{
        this.go(1)
      },1000)
    },
    dotsspancur(){
      console.log(this.aSpan[0])
      console.log(this.aSpan[this.aSpan.length-1])
      if(this.iNow==0 || this.iNow==this.aSpan.length){
        this.aSpan[this.aSpan.length-1].style.background='green'
      }
      if(this.iNow==1 || this.iNow==this.aSpan.length+1){
        this.aSpan[0].style.background='green'
      }
    }
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
