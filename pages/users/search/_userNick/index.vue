<template>
  <div class="container p-5 my-3">
    <p class="title is-1">{{user.nickname}}</p>
    <p class="title is-4">Colecciones públicas</p>
    <div class="container columns" >
      <div class="column is-one-fifth-desktop is-one-third-mobile" v-for="(collection,index) in collectionList" :key="index">
        <collection-icon  :collection="collection._id" @goToCollection="goToCollectionPage(collection._id._id)"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CollectionIcon from '~/components/collectionIcon.vue'
export default {
  components: {
    CollectionIcon
  },
  async asyncData(){
    return {
      user: "",
      collectionList: []
    }
  },
  methods: {
    async getUser(){
      let user = await axios.get(`http://localhost:8080/users/search/${this.$route.params.userNick}`, {
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      })
    user = user.data
    this.user = user
    },
    async getCollections(){
      let collectionList = await axios.get(`http://localhost:8080/users/search/${this.$route.params.userNick}/collections`, {
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      })
      this.collectionList = collectionList.data
      console.log(collectionList)
    },
    goToCollectionPage(route){
      this.$router.push(`/users/search/${this.user.nickname}/${route}`)
    }
  },
  beforeMount(){
    this.getUser()
    this.getCollections()
  }
}
</script>

<style>

</style>
