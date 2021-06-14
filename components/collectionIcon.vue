<template>
  <div class="box">
    <img src="https://media.istockphoto.com/vectors/folder-icon-vector-line-symbol-vector-id953287186?k=6&m=953287186&s=170667a&w=0&h=mPNW8TMhRTNCIWDGPodiFT5CUs1Fouu0xIQORfKMvfE=" alt="">
    <p class="title is-5" id="col-title">{{collection.title}}</p>
    <b-button rounded expanded class="is-primary" @click="$emit('goToCollection')">Ver colección</b-button>

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
  #col-title{
    text-align: center;
  }
</style>
