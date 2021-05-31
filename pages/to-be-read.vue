<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Lista de lectura</p>
    <!-- <book-card
      v-for="(n, index) in [0, 0, 0, 0, 0, 0, 0, 0]"
      :key="index"
      title="El Camino de los Reyes"
      author="Brandon Sanderson"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cum!"
      image="https://m.media-amazon.com/images/I/51Qh9KpS2CL.jpg"
    ></book-card> -->
    <div class="columns is-mobile is-multiline is-centered">
      <div
        class="column is-narrow is-one-quarter-desktop is-half-mobile"
        v-for="(n, index) in 20"
        :key="index"
      >
        <book-pill title="El Camino de los Reyes"></book-pill>
      </div>
    </div>
  </div>
</template>

<script>
import bookCard from "~/components/book-card.vue";
import BookPill from "~/components/book-pill.vue";
export default {
  components: {
    bookCard,
    BookPill,
  },
};
</script>

<style>
</style>
