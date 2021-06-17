<template>
  <div class="container">
    <div class="mt-6" id="header-section">
      <img src="@/static/logo-large.png"  class="login-layout" style="margin:auto"/>
    </div>
    <nuxt />
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.login-layout {
  font-family: "Signika Negative", sans-serif;
  text-align: center;
}
#header-section{
  width: 60%;
  margin: auto;
}
</style>
