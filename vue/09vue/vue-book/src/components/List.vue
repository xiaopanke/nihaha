<template>
  <div>
    <mheader :back="true">列表页</mheader>

    <div class="content">
      <loading v-if="loadtmp"></loading>
      <template v-else>
        <a @click="remove('all')">删除全部</a>
        <h3 v-if="!book.length">暂无数据</h3>
        <ul class="book">
          <li v-for="h in book">
            <img v-lazy="h.bookCover" alt="">
            <div>
              <h3>{{h.bookName}}</h3>
              <span>{{h.bookInfo}}</span>
              <span>{{h.bookPrice}}</span>
              <div>
                <router-link :to="{name:'detail',params:{id:h.id}}">详情{{h.id}}</router-link>
                <a @click="remove(h.id)">删除</a>
                <a @click="add(h)">收藏</a>
              </div>
            </div>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
  import mheader from '../base/Header'
  import loading from '../base/Loading'
  import axios from 'axios'
  import {mapMutations} from 'vuex';
  import * as Types from '../vuex/mutation-types'
  export default {
    data(){
        return {
            book:[],
            loadtmp:true
        }
    },
    components:{
      mheader,
      loading
    },
    created(){
        this.getbook()
    },
    activated(){
      this.getbook();
    },
    methods:{
        ...mapMutations([Types.ADD_COLLECT]),
      getbook(){
          axios.get('/api/book').then((res)=>{
            setTimeout(()=>{
              this.book=res.data
              this.loadtmp=false;
            },1000)
          })
      },
      remove(id){
          axios.delete('/api/book?id='+id).then((res)=>{
            this.book=this.book.filter(item=>(item.id!==id))
          }).catch((err)=>{
              console.log(err)
          })
      },
      add(book){
            this[Types.ADD_COLLECT](book)
            this.$router.push('/collect')
      }
    }
  }
</script>

<style scoped lang="less">
.book{
  li{
    display: flex;
    border-bottom:1px solid #ccc;margin:10px;padding:10px;
    img{
      width:100px;
      height: 110px;
    }
    div{
      display: flex;
      flex-direction: column;
      width:200px;
      div{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 5px;
        a{
          padding:5px 10px;background: #8eff77;
        }
      }
    }
  }
}
</style>
