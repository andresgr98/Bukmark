<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Iniciar sesión</p>
    <div class="container">
      <b-field label="Nombre de usuario" :message="{'Usuario y/o contraseña incorrectos.' : hasErrors}" :type="{ 'is-danger':hasErrors }">
        <b-input placeholder="@" rounded v-model="nickname"></b-input>
      </b-field>
      <b-field label="Contraseña" :message="{'Usuario y/o contraseña incorrectos.' : hasErrors}" :type="{ 'is-danger':hasErrors }">
        <b-input
          type="password"
          placeholder="Escribe tu contraseña..."
          password-reveal
          rounded
          v-model="password"
        >
        </b-input>
      </b-field>
      <b-button rounded expanded class="is-primary" @click.prevent="login" size="is-large">Iniciar sesión</b-button>
      <b-field class="my-2">
        <h5 class="title is-5">¿No tienes una cuenta? <nuxt-link to="/register">Regístrate</nuxt-link></h5>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  layout: 'login-register',
  head(){
    return {
      title: 'Identifícate'
    }
  },
  async asyncData(){
    return{
      hasErrors: false,
      errorMessage: '',
      nickname: "",
      password: "",
    }
  },
  methods: {
    async login() {
      try {
        this.validForm()
        const response = await this.$api.auth.login(this.nickname, this.password)
        const token = response.token
        this.hasErrors = false
        this.$store.dispatch('login', token)
        this.$router.push("/")
      } catch (error) {
        this.hasErrors = true
      }
    },
    validForm(){
      if(this.nickname === ''){
        throw new Error('Introduce el nickname')
      }

      if(this.password === ''){
        throw new Error('Introduce la contraseña')
      }
    }
  },
};
</script>

<style>
</style>
