<template>
  <div>
    <mheader :back="true">收藏</mheader>
    <div class="content">
      <template>
        <h3>热门图书</h3>
        <ul class="hot">
          <li v-for="h in collects">
            <img v-lazy="h.bookCover" alt="">
            <span>{{h.bookName}}</span>
            <span>{{h.bookPrice}}</span>
            <span @click='remove(h)'>删除</span>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
  import mheader from '../base/Header'
  import {mapState} from 'vuex';
  import {mapMutations} from 'vuex';
  import * as Types from '../vuex/mutation-types'

  export default {
    components:{
      mheader
    },
    computed:{
    	...mapState(['collects'])
    },
    methods:{
    ...mapMutations([Types.REMOVE_COLLECT]),
    	remove(book){
    		this[Types.REMOVE_COLLECT](book)
    	}
    }
  }
</script>

<style scoped lang='less'>
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
