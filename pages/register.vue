<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Crear cuenta</p>
    <div class="container">
      <b-field label="Nombre" :message="{'Usuario y/o contraseña incorrectos.' : hasErrors}" :type="{ 'is-danger':hasErrors }">
        <b-input placeholder="" rounded v-model="firstname" required></b-input>
      </b-field>
      <b-field label="Apellidos" :message="{'Usuario y/o contraseña incorrectos.' : hasErrors}" :type="{ 'is-danger':hasErrors }">
        <b-input placeholder="" rounded v-model="lastname" required></b-input>
      </b-field>
      <b-field label="Nombre de usuario" :message="{'Usuario y/o contraseña incorrectos.' : hasErrors}" :type="{ 'is-danger':hasErrors }">
        <b-input placeholder="@" rounded v-model="nickname" required></b-input>
      </b-field>
      <b-field label="Correo electrónico" :message="{'Usuario y/o contraseña incorrectos.' : hasErrors}" :type="{ 'is-danger':hasErrors }">
        <b-input
          placeholder="ejemplo@ejemplo.com"
          rounded
          v-model="email"
          required
        ></b-input>
      </b-field>
      <b-field label="Contraseña" :message="{'Usuario y/o contraseña incorrectos.' : hasErrors}" :type="{ 'is-danger':hasErrors }">
        <b-input
          type="password"
          placeholder="Escribe tu contraseña..."
          password-reveal
          rounded
          v-model="password"
          required
        >
        </b-input>
      </b-field>
      <b-button
        rounded
        expanded
        class="is-primary"
        size="is-large"
        @click="createUser"
        >Crear cuenta</b-button
      >
      <b-field class="my-2">
        <h5 class="title is-5">
          ¿Ya tienes una cuenta?
          <nuxt-link to="/login">Inicia sesión</nuxt-link>
        </h5>
      </b-field>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "login-register",
  name: "register",

  async asyncData() {
    return {
      hasErrors: false,
      errorMessage: "",
      nickname: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    };
  },

  methods: {
    async createUser() {
      try {
        this.hasErrors = false;
        this.validForm();
        const newUserData = {
          nickname: this.nickname,
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname
        };
        await this.$api.users.register(newUserData);
        this.hasErrors = false;
        this.$router.push("/login");
      } catch (error) {
        console.warn(error);
        this.hasErrors = true;
      }
    },
    validForm() {
      if (this.nickname === "") {
        throw new Error("Introduce el nickname");
      }
      if (this.email === "") {
        throw new Error("Introduce el email");
      }
      if (this.password === "") {
        throw new Error("Introduce la contraseña");
      }
    },
  },
};
</script>

<style>
</style>
