<template>
<b-button
      label="Launch alert (custom)"
      type="is-primary"
      size="is-medium"
      @click="alertCustom"
    />
</template>

<script>
export default {
  name: "dialogHelper",
  methods: {
    alertCustom() {
      this.$buefy.dialog.alert({
        title: "Title Alert",
        message: "I have a title, a custom button and <b>HTML</b>!",
        confirmText: "Cool!",
      });
    },
  }
}
</script>

<style>

</style>
