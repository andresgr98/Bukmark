<template>
  <div class="container p-5 my-3">
    <p class="title is-1">Ahora leyendo</p>
    <div class="box columns content">
      <div class="column is-one-quarter" id="imgColumnIndex">
        <img
          id="bookImageIndex"
          src="https://m.media-amazon.com/images/I/51Qh9KpS2CL.jpg"
        />
      </div>
      <div class="column is-three-quarters pl-4">
        <p class="title is-3">El Camino de los Reyes</p>
        <p class="subtitle is-5">Brandon Sanderson</p>
        <p>
          SINOPSIS DEL LIBRO Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Consequuntur ratione ab reprehenderit delectus odio sequi
          repellat quos officia iste debitis.
        </p>
        <p class="title is-4">{{ currentPage }}/1102 páginas</p>
        <b-button
          rounded
          label="Actualizar marcador"
          type="is-primary"
          size="is-large"
          @click.prevent="promptNumber"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    promptNumber() {
      this.$buefy.dialog.prompt({
        message: `Introduce la página actual:`,
        inputAttrs: {
          type: "number",
          placeholder: this.currentPage,
          value: this.currentPage,
          maxlength: 5,
          min: 0,
          max: this.maxPage,
        },
        trapFocus: true,
        onConfirm: (currentPage) => {
          this.$buefy.toast.open(
            `Marcador actualizado a la página: ${currentPage}`
          )
          this.currentPage = currentPage
        },
      });
    },
  },
  data() {
    return {
      currentPage: 0,
      maxPage: 1100,
    };
  },
};
</script>
<style>
#bookImageIndex {
  border-radius: 14px;
}
#imgColumnIndex {
  vertical-align: middle;
}
</style>
