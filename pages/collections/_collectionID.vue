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
    <b-button
      @click="deleteCollection"
      icon-left="delete"
      id="delete-button"
      class="is-danger"
      rounded
      size="is-medium"
    >Eliminar colección</b-button>
    <b-button
      @click="changeVisibility"
      icon-left="lock"
      id="visibility-button"
      class="is-danger is-light"
      rounded
      size="is-medium"
      v-if="visibility === 'public'"
    >Hacer privada</b-button>
    <b-button
      @click="changeVisibility"
      icon-left="lock-open"
      id="visibility-button"
      class="is-success is-light"
      rounded
      size="is-medium"
      v-if="visibility === 'private'"
    >Hacer pública</b-button>
    <p class="title is-2">{{ bookCollection.title }}</p>

    <div class="columns is-mobile is-multiline">
      <div
        class="column is-one-fifth-desktop is-one-third-mobile"
        v-for="(book, index) in bookCollection.books"
        :key="index"
      >
      <book-pill :book="book._id" @getBooks="getCollection"></book-pill>
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
      visibility: ""
    };
  },
  methods: {
    async getCollection() {
      const response = await axios.get(`http://localhost:8080/collections/${this.$route.params.collectionID}`,
        {
          headers: {
            Authorization: "Bearer " + this.$store.getters.token,
          },
        }
      );
      this.bookCollection = response.data
      this.visibility = response.data.visibility
      console.log(this.visibility)
    },

    async deleteCollection(){
      try{
        await axios.delete(`http://localhost:8080/collections/${this.bookCollection._id}`,
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
    },
    async changeVisibility(){
      try{
        this.getCollection()
        if(this.visibility === "private"){
          let vis = {
            visibility: "public"
          }
          await axios.put(`http://localhost:8080/collections/${this.bookCollection._id}`, vis,
          {
            headers: {
              Authorization: "Bearer " + this.$store.getters.token,
            },
          }
        )
        }
        if(this.visibility === "public"){
          let vis = {
            visibility: "private"
          }
          await axios.put(`http://localhost:8080/collections/${this.bookCollection._id}`, vis,
          {
            headers: {
              Authorization: "Bearer " + this.$store.getters.token,
            },
          }
        )
        }
        this.getCollection()
      }catch(error){
        console.error(error)
      }
    }

  },

  computed: {
    currentUser() {
      return this.$store.getters.currentUser
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
#visibility-button {
  position: fixed;
  right: 6%;
  bottom: 20%;
  z-index: 5;
}

</style>
