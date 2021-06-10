<template>
<div>

  <book-pill v-for="(book, index) in bookCollection.books" :key="index" :title="book._id.title" :cover="getBookImg(book._id.cover)"></book-pill>
</div>
</template>

<script>
import bookPill from '~/components/book-pill.vue'
import axios from 'axios'
export default {
  components: { bookPill },
  data() {
    return{
      bookCollection: {},
      bookCover: ""
    }
  },
  methods: {
    async getCollection(){
      const response = await axios.get('http://localhost:8080/users/60c095913a86f094c96aada8/collections/60c095913a86f094c96aada9')
      this.bookCollection = response.data
      console.log(this.bookCollection)
    },
    getBookImg(cover){
      if (cover === undefined || cover === "") {
        return "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
      }
      let image = `https://covers.openlibrary.org/b/id/${cover}-M.jpg`;
      return image;
    }
  },
  beforeMount(){
    this.getCollection()
  }
}
</script>

<style>

</style>
