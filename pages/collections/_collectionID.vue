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
    <b-button
      @click="deleteCollection"
      icon-left="delete"
      id="delete-button"
      class="is-danger"
      rounded
      size="is-medium"
    >Eliminar colección</b-button>
    <p class="title is-2">{{ bookCollection.title }}</p>

    <div class="columns is-mobile is-multiline">
      <div
        class="column is-one-fifth-desktop is-one-third-mobile"
        v-for="(book, index) in bookCollection.books"
        :key="index"
      >
      <book-pill :book="book._id" @remove="removeFromCollection"></book-pill>
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
      const response = await axios.get(`/collections/${this.$route.params.collectionID}`,
        {
          headers: {
            Authorization: "Bearer " + this.$store.getters.token,
          },
        }
      );
      this.bookCollection = response.data;
      console.log("books: ", this.bookCollection)
    },

    async removeFromCollection(bookID){
      await axios.delete(`/collections/${this.$route.params.collectionID}/books/${bookID}`,
        {
          headers: {
            Authorization: "Bearer " + this.$store.getters.token,
          },
        }
      )
      this.$buefy.toast.open(`Libro eliminado de la colección.`);

      this.getCollection()
    },
    async deleteCollection(){
      try{
        await axios.delete(`/collections/${this.bookCollection._id}`,
          {
            headers: {
              Authorization: "Bearer " + this.$store.getters.token,
            },
          }
        )
        this.$router.push('/collections')
      }catch(error){
        console.error(error)
      }
    }

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
#delete-button {
  position: fixed;
  right: 6%;
  bottom: 10%;
  z-index: 5;
}
</style>
