<template>
  <div class="container p-5 my-3">
    <b-button
      @click="$router.push('/collections')"
      icon-left="arrow-left"
      id="back-button"
      class="is-primary is-light"
      rounded
      size="is-medium"
    ></b-button>
    <p class="title is-2">{{ bookCollection.title }}</p>

    <div class="columns is-mobile is-multiline">
      <div
        class="column is-one-fifth-desktop is-one-third-mobile"
        v-for="(book, index) in bookCollection.books"
        :key="index"
      >
      <book-pill :book="book._id" ></book-pill>
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
      const response = await axios.get(`https://bukmark-api.herokuapp.com/collections/${this.$route.params.collectionID}`,
        {
          headers: {
            Authorization: "Bearer " + this.$store.getters.token,
          },
        }
      );
      this.bookCollection = response.data;
      console.log("books: ", this.bookCollection)
    },

  },

  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },

  created() {
    this.getCollection();

  },
};
</script>

<style>
#back-button {
  position: fixed;
  left: 6%;
  bottom: 10%;
  z-index: 5;
}
</style>
