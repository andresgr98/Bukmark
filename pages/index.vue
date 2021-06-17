<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Ahora leyendo</p>
    <reading-card v-for="(bookItem, index) in books" :key="index" :book="books[index]" />
  </div>
</template>

<script>
import axios from 'axios'
import ReadingCard from "~/components/readingCard.vue";
export default {
  components: { ReadingCard },
  async asyncData() {
    return {
      books: []
    };
  },
  methods: {
    async getBooks() {
      const response = await axios.get(`/reading`,
        {
          headers: {
            Authorization: "Bearer " + this.$store.getters.token,
          },
        }
      )
      let readingCollection = response.data
      console.log(readingCollection)
      if (!readingCollection){
        console.error ("No se ha encontrado la lista de lectura")
        return
      }
      this.books = readingCollection.books
    },
  },
  beforeMount(){
    this.getBooks()
  }
}
</script>
<style>
</style>
