<template>
  <div class="box columns content mb-6">
      <div class="column is-one-quarter" id="imgColumnIndex">
        <img
          id="bookImageIndex"
          src="https://m.media-amazon.com/images/I/51Qh9KpS2CL.jpg"
        />
      </div>
      <div class="column is-three-quarters pl-4">
        <p class="title is-3">{{book._id.title}}</p>
        <p class="subtitle is-5">{{book._id.author}}</p>
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
</template>

<script>
export default {
  name: "reading-card",
  props: {
    book: Object
  },
  async asyncData() {
    return {
      currentPage: 0,
      maxPage: 1100,
    };
  },
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

}
</script>

<style>
#bookImageIndex {
  border-radius: 10px;
}
#imgColumnIndex {
  vertical-align: middle;
}
</style>
