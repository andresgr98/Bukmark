<template>
  <div class="box">
    <div class="columns is-vcentered is-multiline" expanded>
      <div class="column is-one-sixth" id="image-column">
        <img
          :src="getImage(book.cover_i)"
          placeholder="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
          id="bookImgBookCard"
        />
      </div>
      <div class="column is-three-sixths">
        <h3 class="title is-5">{{ book.title }}</h3>
        <template v-if="book.author_name">{{ book.author_name[0] }}</template>
        <template v-else>Autor desconocido</template>
      </div>
      <div class="column is-two-sixths is-narrow" style="textalign: center">
        <b-field grouped>
          <b-button
            rounded
            expanded
            class="is-success"
            size="is-medium"
            @click="promptNumberOfPages"
            >Leer</b-button
          >
        </b-field>

        <b-field grouped>
          <b-select
            placeholder="Añadir a una colección"
            rounded
            v-model="collectionValue"
          >
            <option
              :value="collection._id._id"
              v-for="(collection, index) in collectionList"
              :key="index"
            >
              {{ collectionList[index]._id.title }}
            </option>
          </b-select>
          <b-button
            rounded
            class="is-success is-light"
            @click="addToCollection(collectionValue)"
            icon-left="plus"
            expanded
            >Añadir</b-button
          >
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
import axios from "axios";
export default {
  name: "book-card",
  props: {
    image: String,
    book: Object,
  },
  data() {
    return {
      collectionList: [],
      collectionValue: "",
    };
  },
  methods: {
    async readBook() {
      try {
        let bookData = {
          title: this.book.title,
          olid: this.book.key.replace("/works/", ""),
          author: this.book.author_name
            ? this.book.author_name[0]
            : "Autor no encontrado",
          isbn: this.book.isbn[0],
          cover: this.book.cover_i,
          publisher: this.book.publisher[0],
          published_at: this.book.publish_date[0],
          url: `https://openlibrary.org${this.book.key}`,
          number_of_pages: 0,
        };
        let foundCollection = this.collectionList.find(
          (item) => item._id.is_removable === false
        );
        if (!foundCollection) {
          throw new Error("Colección no encontrada");
        }
        if (foundCollection) {
          console.log(foundCollection);
          await axios.post(
            `http://localhost:8080/collections/${foundCollection._id._id}`,
            bookData,
            {
              headers: {
                Authorization: "Bearer " + this.$store.getters.token,
              },
            }
          );
          console.log(`Libro añadido a ${foundCollection._id.title}`);
          this.$buefy.toast.open(
            `Libro añadido a la colección ${foundCollection._id.title}`
          );

          return;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async addToCollection(value) {
      try {
        console.log(value);
        let foundCollection = this.collectionList.find(
          (item) => item._id._id === value
        );
        if (!foundCollection) {
          throw new Error("Colección no encontrada");
        }
        let bookData = {
          title: this.book.title,
          olid: this.book.key.replace("/works/", ""),
          author: this.book.author_name
            ? this.book.author_name[0]
            : "Autor no encontrado",
          isbn: this.book.isbn[0],
          cover: this.book.cover_i,
          publisher: this.book.publisher[0],
          published_at: this.book.publish_date[0],
          url: `https://openlibrary.org${this.book.key}`,
          number_of_pages: this.book.number_of_pages,
        };
        if (foundCollection) {
          await axios.post(
            `http://localhost:8080/collections/${value}`,
            bookData,
            {
              headers: {
                Authorization: "Bearer " + this.$store.getters.token,
              },
            }
          );
          console.log(
            `Libro añadido a la colección ${foundCollection._id.title}`
          );
          this.$buefy.toast.open(`Libro añadido a la colección.`);

          return;
        }
        console.error("No se ha encontrado la colección");
      } catch (error) {
        console.error(error);
      }
    },
    promptNumberOfPages() {
      this.$buefy.dialog.prompt({
        message: `Introduce el número de paginas de este libro:`,
        inputAttrs: {
          type: "number",
          placeholder: 0,
          value: this.totalPageCount,
          maxlength: 5,
          min: 0,
          max: 1000000,
        },
        trapFocus: true,
        onConfirm: (currentPage) => {
          this.$buefy.toast.open(
            `Marcador actualizado a la página: ${currentPage}`
          )
          this.currentPage = currentPage
          this.readBook()
        },
    })
    },

    getImage(cover_i) {
      this.isContent = true;
      if (cover_i === undefined) {
        return "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
      }
      let image = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
      return image;
    },
    async getCollections() {
      const response = await axios.get(
        "http://localhost:8080/collections",
        {
          headers: {
            Authorization: "Bearer " + this.$store.getters.token,
          },
        }
      );
      this.collectionList = response.data;
    },
    alertCustom() {
      this.$buefy.dialog.alert({
        title: "Title Alert",
        message: ``,
        confirmText: "Cool!",
      });
    },
  },

  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  created() {
    this.getCollections();
  },
};
</script>

<style>
#image-column {
  vertical-align: middle;
}
#bookImgBookCard {
  border-radius: 6px;
  height: "30px";
}
</style>
