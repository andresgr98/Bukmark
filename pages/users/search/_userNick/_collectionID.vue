<template>
  <div class="container p-5 my-3">
    <b-button
      @click="$router.go(-1)"
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
      <book-pill-public :book="book._id" @getBooks="getCollection"></book-pill-public>
       </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BookPillPublic from '~/components/book-pill-public.vue';
export default {
  components: { BookPillPublic },
  async asyncData() {
    return {
      bookCollection: {},
      bookCover: "",
    };
  },
  methods: {
    async getCollection() {
      const response = await axios.get(`/users/search/${this.$route.params.userNick}/collections/${this.$route.params.collectionID}`,
        {
          headers: {
            Authorization: "Bearer " + this.$store.getters.token,
          },
        }
      );
      this.bookCollection = response.data;
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
        this.$router.go(-1)
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

  beforeMount() {
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
