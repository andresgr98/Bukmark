<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Crear cuenta</p>
    <div class="container">
      <b-field label="Nombre de usuario">
        <b-input placeholder="@" rounded></b-input>
      </b-field>
      <b-field label="Correo electrónico">
        <b-input placeholder="ejemplo@ejemplo.com" rounded></b-input>
      </b-field>
      <b-field label="Contraseña">
        <b-input
          type="password"
          placeholder="Escribe tu contraseña..."
          password-reveal
          rounded
        >
        </b-input>
      </b-field>
      <b-button rounded expanded class="is-primary" size="is-large">Crear cuenta</b-button>
      <b-field class="my-2">
        <h5 class="title is-5">¿Ya tienes una cuenta? <nuxt-link to="/login">Inicia sesión</nuxt-link></h5>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login-register',
  name: 'register'
};
</script>

<style>
</style>
