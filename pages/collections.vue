<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Colecciones</p>
  <collection-icon v-for="(col, index) in collectionList" :key="index" :collection="collectionList[index]._id" />
  </div>
</template>

<script>
import CollectionIcon from '~/components/collectionIcon.vue'
import axios from 'axios'
export default {
  components: {
    CollectionIcon,
  },
  data(){
    return {
      collectionList: []
    }
  },
  methods: {
    async getCollections(){
      const response= await axios.get("http://localhost:8080/users/60c095913a86f094c96aada8/collections")
      this.collectionList = response.data
      console.log(this.collectionList)
    }
  },
  beforeMount(){
    this.getCollections()
  }
};
</script>

<style>
</style>
