<template>
  <div class="tile box">
    <div class="columns is-vcentered is-multiline">
      <div class="column is-one-fifth" id="image-column">
        <figure class="image">
          <img
            :src="getImage(book.cover_i)"
            placeholder="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
            id="bookImgBookCard"
          />
        </figure>
      </div>
      <div class="column is-two-fifths">
        <div class="card-content">
          <h3 class="title is-5">{{ book.title }}</h3>
          <template v-if="book.author_name[0]">{{
            book.author_name[0]
          }}</template>
          <template v-else>Autor desconocido</template>
        </div>
      </div>
      <div class="column is-two-fifths" style="textalign: center">
        <b-field grouped>
          <b-button rounded expanded class="is-success" size="is-medium"
            >Leer</b-button
          >
        </b-field>
        <b-field>
          <b-button
            rounded
            expanded
            class="is-warning is-light"
            size="is-medium"
            >Añadir a colección</b-button
          >
          <b-select placeholder="Selecciona una colección" rounded>
            <option
              :value="collectionList[index]._id._id"
              v-for="(collection, index) in collectionList"
              :key="index"
            >{{collectionList[index]._id.title}}</option>
          </b-select>
        </b-field>
        <b-field>
          <b-button rounded expanded class="is-info is-light" size="is-medium"
            >Ver detalles</b-button
          >
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "book-card",
  props: {
    image: String,
    book: Object,
  },
  async asyncData(){
    return {
      collectionList: []
    }
  },
  methods: {
    addToCollection() {},
    getImage(cover_i) {
      this.isContent = true;
      if (cover_i === undefined) {
        return "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
      }
      let image = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
      return image;
    },
    async getCollections() {
      const response = await axios.get("http://localhost:8080/collections", {
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      });
      this.collectionList = response.data;
      console.log(this.collectionList)
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  beforeMount(){
    this.getCollections()
  }
};
</script>

<style>
#image-column {
  vertical-align: middle;
}
#bookImgBookCard {
  border-radius: 6px;
}
</style>
