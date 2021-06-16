<template >
  <div id="pill-container" v-if="book" >
    <img :src="getBookImg(book.cover)" id="img" />
    <p class="title is-5 is-centered">{{ book.title }}</p>
    <p class="subtitle is-centered">{{ book.author }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "book-pill",
  props: {
    book: Object,
  },
  async asyncData(){
    return{
      collection:{}
    }
  },
  methods: {
    getBookImg(cover) {
      if (cover === undefined || cover === "" || cover === null) {
        return "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
      }
      let image = `https://covers.openlibrary.org/b/id/${cover}-M.jpg`;
      return image;
    },
  },


}
</script>

<style>
#main-box {
  max-width: 100px;
  padding: 0;
}
#img {
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
  max-width: 180px;
  width: 100%;
}
#pill-container {
  text-align: center;
}
</style>
