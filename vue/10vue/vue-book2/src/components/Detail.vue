<template>
  <div>
    <mheader :backtemp="true"><div slot="title">详情</div></mheader>
    <div class="content">
      <ul class="form">
        <li>
          <label for="bookName">书名</label>
          <input type="text" id="bookName" v-model="book.bookName">
        </li>
        <li>
          <label for="bookCover">书封面</label>
          <input type="text" id="bookCover" v-model="book.bookCover">
        </li>
        <li>
          <label for="bookInfo">书信息</label>
          <input type="text" id="bookInfo" v-model="book.bookInfo">
        </li>
        <li>
          <label for="bookPrice">书价格</label>
          <input type="text" id="bookPrice" v-model="book.bookPrice">
        </li>
      </ul>
      <button @click="update">修改</button>
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
        book:{
          "bookName":"","bookPrice":'',"bookInfo":"",bookCover:''
        }
      }
    },
    components:{
      mheader,
      mfooter
    },
    created(){
        this.getbook();
    },
    methods:{
      getbook(){
        axios.get('/api/books?id='+this.$route.params.id).then((res)=>{
          this.book=res.data
        })
      },
      update(){
        axios.put('/api/books?id='+this.$route.params.id,this.book).then((res)=>{
            this.$router.push('/list')
        })
      }
    }
  }
</script>

<style scoped lang="less">
.form{
  line-height: 30px;
  input{ height:28px; margin-left: 20px; outline: none; border:1px solid #000; }

}
button{padding:10px 20px;}
</style>
