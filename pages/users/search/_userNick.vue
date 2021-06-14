<template>
  <div class="container p-5 my-3">
    <p class="title is-1">{{user.nickname}}</p>
    <p class="title is-4">Colecciones públicas</p>
    <div class="container columns" >
      <div class="column is-one-fifth-desktop is-one-third-mobile" v-for="(collection,index) in user.collections" :key="index">
        <collection-icon  :collection="user.collections[index]._id"/>
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
      user: ""
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
    console.log(user.collections)
    this.user = user
    }
  },
  beforeMount(){
    this.getUser()
  }
}
</script>

<style>

</style>
