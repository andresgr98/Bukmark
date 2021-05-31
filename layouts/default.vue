<template>
<div>
  <main-navbar />
  <nuxt />
</div>

</template>

<script>
import mainNavbar from "@/components/main-navbar.vue";

export default{
  components: {
     mainNavbar
  },
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" },
        },
      ],
    };
  },
};
</script>
