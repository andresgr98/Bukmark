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
          v-for="(result, index) in searchResult[0]"
          :key="index"
          :title="searchResult[0][index].title"
          :author="searchResult[0][index].author_name[0]"
          :image="getImage(searchResult[0][index].cover_i)"
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
      bookImage: "",
      bookDesc: "",
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
        this.searchResult.push(response.data.docs.slice(0, 10));
        this.isContent = true;
        this.searchError = false
        if(this.searchResult[0].length === 0){
          this.searchError = true
        }
        console.log('searchResult array: ', this.searchResult);
      } catch (error) {
        console.error(error);
        this.searchError = true
      }
    },
    getImage(cover_i) {
      this.isContent = true;
      if (cover_i === undefined) {
        return "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
      }
      let image = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
      console.log(image);
      return image;
    },

  },
  computed: {
    async bookResult() {},

  },
};
</script>
