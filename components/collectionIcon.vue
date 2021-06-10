<template>
  <div class="box">
    <img src="https://image.freepik.com/free-vector/illustration-folder-icon_53876-5845.jpg" alt="">
    {{collection.title}}
    <b-button rounded class="is-primary" @click="$emit('goToCollection')">Ver colección</b-button>

  </div>
</template>

<script>
export default {
  props: {
    collection: Object
  },

}
</script>

<style>

</style>
