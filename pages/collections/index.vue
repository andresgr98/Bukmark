<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Colecciones</p>
    <b-button
      icon-left="plus"
      rounded
      class="is-primary mb-5"
      size="is-medium"
      @click="prompt"
    >
    </b-button>

    <div class="columns  is-multiline">
      <div
        class="column is-one-fifth-desktop"
        v-for="(col, index) in collectionList"
        :key="index"
      >
        <collection-icon
          :collection="col._id"
          v-if="col._id !== null"
          @goToCollection="goToCollection(col._id._id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CollectionIcon from "~/components/collectionIcon.vue";
import axios from "axios";
export default {
  components: {
    CollectionIcon,
  },
  async asyncData() {
    return {
      collectionList: [],
      newCollectionTitle: "",
      showTitleInput: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    async getCollections() {
      const response = await axios.get("http://localhost:8080/collections", {
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      });
      this.collectionList = response.data;
    },
    goToCollection(route) {
      this.$router.push(`/collections/${route}`);
    },
    prompt() {
      this.$buefy.dialog.prompt({
        message: `Introduce el nombre de la colección: `,
        inputAttrs: {
          placeholder: "Colección de prueba",
          maxlength: 255,
        },
        trapFocus: true,
        onConfirm: (value) => {
          this.$buefy.toast.open(`Colección con nombre ${value} creada`);
          this.newCollectionTitle = value;
          this.createCollection(value);
        },
      });
    },
    async createCollection(title) {
      await axios.post(
        "http://localhost:8080/collections", {title: title},
        {
          headers: {
            Authorization: "Bearer " + this.$store.getters.token,
          },
        }
      );
      this.getCollections()
    },
  },

  beforeMount() {
    this.getCollections();
  },
};
</script>

<style>
</style>
