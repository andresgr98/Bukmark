<template>
  <div id="pill-container">
    <img
      src="https://m.media-amazon.com/images/I/51Qh9KpS2CL.jpg"
      alt=""
      id="img"
    />
    <p class="title is-5 is-centered">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "book-pill",
  props: {
    title: String
  }
};
</script>

<style>
#main-box {
  /* background: url(https://m.media-amazon.com/images/I/51Qh9KpS2CL.jpg) no-repeat; */
  max-width: 100px;
  padding: 0;
}
#img {
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
  max-width: 180px;
  width: 100%;
}
#pill-container{
  text-align: center;
}
</style>
