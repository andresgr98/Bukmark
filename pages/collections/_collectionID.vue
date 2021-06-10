<template>
  <div class="container p-5 my-3">
    <p class="title is-2">     <b-button @click="$router.push('/collections')" icon-left="arrow-left">Volver a colecciones</b-button>
{{bookCollection.title}}</p>

    <div class="columns is-mobile">
      <div
        class="column is-one-fifth-desktop is-one-third-mobile"
        v-for="(book, index) in bookCollection.books"
        :key="index"
      >
        <book-pill
          :book="book._id"
        ></book-pill>
      </div>
    </div>
  </div>
</template>

<script>
import bookPill from "~/components/book-pill.vue";
import axios from "axios";
export default {
  components: { bookPill },
  async asyncData() {
    return {
      bookCollection: {},
      bookCover: "",
    };
  },
  methods: {
    async getCollection() {
      const response = await axios.get(
        `http://localhost:8080/collections/${this.$route.params.collectionID}`
      );
      this.bookCollection = response.data;
    },
    getBookImg(cover) {
      if (cover === undefined || cover === "") {
        return "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
      }
      let image = `https://covers.openlibrary.org/b/id/${cover}-M.jpg`;
      return image;
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  beforeMount() {
    this.getCollection();
  },
};
</script>

<style>
</style>
