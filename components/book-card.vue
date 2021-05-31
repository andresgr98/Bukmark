<template>
  <div class="tile box">
    <div class="columns is-vcentered  is-multiline">
      <div class="column is-one-fifth" id="image-column">
        <figure class="image">
          <b-image
            :src="image"
            placeholder="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
          ></b-image>
        </figure>
      </div>
      <div class="column is-two-fifths">
        <div class="card-content">
          <h3 class="title is-5">{{ title }}</h3>
          <template v-if="author">{{ author }}</template>
          <template v-else>Autor desconocido</template>
          <p>
            {{ description }}
          </p>
        </div>

      </div>
      <div class="column is-two-fifths " style="textAlign:center">
          <b-field >
            <b-button rounded expanded class="is-success" size="is-medium">Leer</b-button>
          </b-field>
          <b-field >
            <b-button rounded expanded class="is-warning is-light" size="is-medium">Añadir a la lista</b-button>
          </b-field>
          <b-field >
            <b-button rounded expanded class="is-info is-light" size="is-medium">Ver detalles</b-button>
          </b-field>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "book-card",
  props: {
    image: String,
    title: String,
    author: String,
    description: String,
  },
};
</script>

<style>
#image-column{
  vertical-align: middle;
}
</style>
