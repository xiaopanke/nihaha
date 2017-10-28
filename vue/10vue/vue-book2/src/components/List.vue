<template>
  <div>
    <mheader :backtemp="true"><div slot="title">列表页</div></mheader>
    <div class="content">
      <ul class="hot">
        <li v-for="h in books">
          <img :src="h.bookCover" alt="">
          <div class="info">
            <h3>{{h.bookName}}</h3>
            <span>{{h.bookPrice}}</span>
            <div>
              <router-link :to="{name:'detail',params:{id:h.id}}" tag="button">详情{{h.id}}</router-link>
              <button @click="remove(h.id)">删除</button>
              <button>收藏</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <mfooter></mfooter>
  </div>
</template>

<script>
  import mheader from './base/Header'
  import mfooter from './base/Footer'
  import axios from 'axios'
  export default {
    data(){
      return {
        books:[]
      }
    },
    components:{
      mheader,
      mfooter
    },
    created(){
      this.getbooks();
    },
    methods:{
      getbooks(){
        axios.get('/api/books').then((res)=>{
            this.books=res.data
        })
      },
      remove(id){
        axios.delete('/api/books?id='+id).then((res)=>{
          this.getbooks()
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .hot{
    flex-wrap: wrap;
    li{
      display: flex;  padding:10px; box-sizing: border-box;
      img{flex:1;height:100px;}
      .info{flex: 2;
        button{padding:6px 16px;}
      }
    }
  }
</style>
