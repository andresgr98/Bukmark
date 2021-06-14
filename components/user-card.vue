<template>
  <div class="box">
    <div class="columns is-vcentered is-multiline " expanded>
      <div class="column is-half pl-5"><p class="title is-4">@{{user.nickname}}</p> <p class="subtitle">{{user.firstname}} {{user.lastname}}</p></div>
      <div class="column is-half"><b-button size="is-medium" rounded expanded class="is-primary" @click="goToUser">Ver perfil</b-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-card",
  props: {
    user: Object
  },
  methods: {
    goToUser(){
      this.$router.push(`/users/search/${this.user.nickname}`)
    }
  }
}
</script>

<style>

</style>
