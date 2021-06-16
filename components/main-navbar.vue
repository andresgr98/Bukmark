<template>
    <b-navbar centered>
        <template #brand>
            <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
                <img
                    src="@/static/icon.png"
                    alt="icono Bukmark"
                >
                <p class="title is-4" id="main-title-navbar">&nbsp;Bukmark</p>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
                Inicio
            </b-navbar-item>
            <b-navbar-item tag="nuxt-link" :to="{ path: '/search' }">
                Búsqueda
            </b-navbar-item>
            <b-navbar-item tag="nuxt-link" :to="{ path: '/collections' }">
                Colecciones
            </b-navbar-item>
            <b-navbar-item tag="nuxt-link" :to="{ path: '/users/search' }">
                Usuarios
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button rounded class=" is-primary" tag="nuxt-link" :to="{ path: '/register' }" v-if="!isAuth">
                        <strong>Registrarse</strong>
                    </b-button>
                    <b-button rounded class=" is-light" tag="nuxt-link" :to="{ path: '/login' }" v-if="!isAuth">
                        Iniciar sesión
                    </b-button>
                    <b-button rounded class=" is-light is-warning" tag="nuxt-link" :to="{ path: '/profile' }" v-if="isAuth">
                        {{currentUser.firstname}}
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: "mainNavbar",
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    },
    currentUser() {
      return this.$store.getters.currentUser
    },

  }
}
</script>

<style>
#main-title-navbar{
  font-family: 'Signika Negative', sans-serif;
}
</style>
