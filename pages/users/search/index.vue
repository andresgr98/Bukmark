<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Amigos</p>
    <div class="container">
      <b-field label="Buscar usuario" grouped :message="{'Usuario no encontrado. Inténtalo con otro nick.': searchError}" :type="{ 'is-danger':searchError }">
        <b-input expanded rounded v-model="nick" size="is-large"></b-input>
        <b-button @click="searchUsers(nick)" icon-left="magnify" size="is-large" rounded></b-button>
      </b-field>
    </div>
    <div class="container mt-5">
      <user-card :user="userSearch" v-if="showCard"/>
    </div>
  </div>
</template>

<script>
import userCard from '~/components/user-card.vue'
import axios from 'axios'
export default {
  components: { userCard },
  async asyncData(){
    return{
      userSearch: {},
      nick: "",
      showCard: false,
      searchError: false
    }
  },
  methods: {
    async searchUsers(nick){
      try{
        let user = await axios.get(`/users/search/${nick}`, {
            headers: {
              Authorization: "Bearer " + this.$store.getters.token,
            },
          }
        )
        this.userSearch = user.data
        this.showCard = true
        this.searchError = false
        return user
      }catch(error){
        this.searchError = true
      }
    }
  }

}
</script>

<style>

</style>
