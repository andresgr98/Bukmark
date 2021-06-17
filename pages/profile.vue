<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Perfil de {{ currentUser.firstname }}</p>
    <b-button @click="logout" rounded class="is-danger">Cerrar sesión</b-button>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");

      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>
