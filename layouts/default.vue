<template>
<div>
  <main-navbar />
  <nuxt />
  <!-- <main-footer></main-footer> -->
</div>

</template>

<script>
import mainNavbar from "@/components/main-navbar.vue";
import mainFooter from "@/components/main-footer.vue"
export default{
  name: 'default',
  components: {
     mainNavbar,
     mainFooter
  },
  data() {
    return {

    }
  },
};
</script>
