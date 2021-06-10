<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Colecciones</p>
    <div class="columns">
      <div class="column is-one-fifth-desktop is-one-third-mobile is-mobile" v-for="(col, index) in collectionList" :key="index">
        <collection-icon  :collection="collectionList[index]._id" @goToCollection="goToCollection(collectionList[index]._id._id)"/>
      </div>
    </div>
  </div>
</template>

<script>
import CollectionIcon from '~/components/collectionIcon.vue'
import axios from 'axios'
export default {
  components: {
    CollectionIcon,
  },
  async asyncData(){
    return {
      collectionList: []
    }
  },
  computed: {
    currentUser(){
      return this.$store.getters.currentUser
    }
  },
  methods: {
    async getCollections(){
      const response = await axios.get('http://localhost:8080/collections', {headers: {
        Authorization: "Bearer " + this.$store.getters.token
      }})
      this.collectionList = response.data
      },
    goToCollection(route){
      this.$router.push(`/collections/${route}`)
    }
  },
  beforeMount(){
    this.getCollections()
  }
};
</script>

<style>
</style>
