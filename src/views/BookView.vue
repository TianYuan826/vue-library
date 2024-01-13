<template>
  <div class="book">
    <Header></Header>
    <table>
      <tr>
        <td>No.</td>
        <td>Title</td>
        <td>Author</td>
      </tr>
      <tr v-for="item in books">
        <td>{{ item.book_id }}</td>
        <td>{{ item.book_name }}</td>
        <td>{{ item.book_author}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import Axios from 'axios';
import Header from '@/components/Header.vue'

export default {
  name: 'book',
  components: {
    Header,
  },
  data(){
    return{
      books:[],
    }
  },
  created(){
    Axios.get('http://localhost:8181/book/findAll').then(res=>{
      const data = res.data
      this.books = data
      console.log(data)
    })
    .catch(error=>{
      console("error", error)
    })
  },
}
</script>