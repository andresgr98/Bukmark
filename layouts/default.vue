<template>
<div>
  <main-navbar />
  <nuxt />
  <!-- <main-footer></main-footer> -->
</div>

</template>

<script>
import mainNavbar from "@/components/main-navbar.vue";
export default{
  name: 'default',
  components: {
    mainNavbar,
  },
  data() {
    return {

    }
  },
};
</script>
