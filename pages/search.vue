<template>
  <section class="container p-5 my-3">
    <p class="title is-1">Buscar</p>
    <div class="container">
      <div class="columns section is-centered">
        <div class="column">
          <b-field grouped :message="{'Introduce un ISBN válido': ISBNError}" :type="{ 'is-danger': ISBNError }" label="Buscar por ISBN">
            <b-input rounded expanded type="text" v-model="isbn"></b-input>
            <b-button rounded @click.prevent="getBookByISBN" icon-right="magnify"></b-button>
          </b-field>
        </div>
        <div class="column">
          <b-field grouped label="Buscar por título" :message="{'Título no encontrado. Inténtalo con otro título.': searchError}" :type="{ 'is-danger':searchError }">
            <b-input rounded expanded type="search" v-model="bookTitle" ></b-input>
            <b-button rounded @click.prevent="getBookByTitle" icon-right="magnify"></b-button>
          </b-field>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column" v-show="book">
          <div class="tile box px-3">{{ book }}</div>
        </div>

        <div class="column">
          <bookCard
          v-for="(result, index) in searchResult"
          :key="index"
          :book="searchResult[index]"
        ></bookCard>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      book: "",
      isbn: "",
      bookTitle: "",
      searchResult: [],
      author: "",
      isContent: false,
      ISBNError: false,
      searchError: false
    };
  },
  components: {},

  methods: {
    async getBookByISBN() {
      try {
        const response = await axios.get(
          `https://openlibrary.org/isbn/${this.isbn}.json`
        );
        this.book = response.data.title;
        this.isContent = true;
        this.ISBNError = false
      } catch (error) {
        console.error(error);
        this.ISBNError = true
      }
    },
    async getBookByTitle() {
      try {
        let bookTitleParsed = this.bookTitle.split(" ").join("+");
        this.searchResult = [];
        const response = await axios.get(
          `https://openlibrary.org/search.json?title=${bookTitleParsed}`
        );
        this.searchResult = response.data.docs.slice(0, 15)
        this.isContent = true;
        this.searchError = false
        if(this.searchResult[0].length === 0){
          this.searchError = true
        }
      } catch (error) {
        console.error(error);
        this.searchError = true
      }
    },

  },
  computed: {
    async bookResult() {},

  },
};
</script>
