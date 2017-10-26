<template>
  <div>
    <mheader :back="true">添加</mheader>
    <div class="content">
        <ul>
          <li>
            <label for="bookName">书名</label>
            <input type="text" id="bookName" v-model="book.bookName" required>
          </li>
          <li>
            <label for="bookCover">书封面</label>
            <input type="text" id="bookCover" v-model="book.bookCover">
          </li>
          <li>
            <label for="bookInfo">详情</label>
            <input type="text" id="bookInfo" v-model="book.bookInfo">
          </li>
          <li>
            <label for="bookPrice">价格</label>
            <input type="text" id="bookPrice" v-model="book.bookPrice">
          </li>
        </ul>
        <button @click="add">添加</button>

    </div>
  </div>
</template>

<script>
  import mheader from '../base/Header'
  import axios from 'axios'
  export default {
      data(){
          return {
              book:{
                bookName:'',
                bookCover:'',
                bookInfo:'',
                bookPrice:''
              }
          }
      },
      components:{
        mheader
      },
    methods:{
      add(){
        axios.post('/api/book',this.book).then((res)=>{
            this.$router.push('/list')
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .content{
    width:90%;
    margin:20px auto;
    li{
      display: flex;
      height: 40px;
      label{
        flex: 1;
        line-height: 30px;
      }
      input{
        flex: 3;
        height: 30px;
        border:1px solid #ccc; outline:none; padding-left:20px;
      }
    }
    button{width:100px;line-height:30px;background: #65ff59;border:none;outline: none; margin:20px auto; display: block}
  }

</style>
