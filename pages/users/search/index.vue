<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Amigos</p>
    <div class="container">
      <b-field label="Buscar usuario" grouped >
        <b-input expanded rounded v-model="nick"></b-input>
        <b-button @click="searchUsers(nick)"></b-button>
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
      showCard: false
    }
  },
  methods: {
    async searchUsers(nick){
      let user = await axios.get(`http://localhost:8080/users/search/${nick}`, {
          headers: {
            Authorization: "Bearer " + this.$store.getters.token,
          },
        }
      )
      this.userSearch = user.data
      this.showCard = true
      return user
    }
  }

}
</script>

<style>

</style>
