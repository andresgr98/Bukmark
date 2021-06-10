<template>
  <div id="pill-container">
    <img :src="getBookImg(book.cover)" alt="" id="img" />
    <p class="title is-5 is-centered">{{ book.title }}</p>
    <p class="subtitle is-centered">{{ book.author }}</p>
    <b-button class="is-danger" @click="deleteFromCollection"
      >Eliminar de la colección</b-button>
  </div>
</template>

<script>
export default {
  name: "book-pill",
  props: {
    book: Object,
  },
  methods: {
    deleteFromCollection() {
      this.$emit();
    },
    getBookImg(cover) {
      if (cover === undefined || cover === "") {
        return "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
      }
      let image = `https://covers.openlibrary.org/b/id/${cover}-M.jpg`;
      return image;
    },
  },
};
</script>

<style>
#main-box {
  /* background: url(https://m.media-amazon.com/images/I/51Qh9KpS2CL.jpg) no-repeat; */
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
