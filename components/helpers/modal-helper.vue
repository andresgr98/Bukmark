<template>
  <section>
    <b-button
      label="Launch component modal"
      type="is-primary"
      size="is-medium"
      @click="isComponentModalActive = true"
    />

    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template>
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
            <button type="button" class="delete" @click="$emit('close')" />
          </header>
          <section class="modal-card-body"></section>
          <footer class="modal-card-foot">
            <b-button label="Close" @click="$emit('close')" />
            <b-button label="Login" type="is-primary" />
          </footer>
        </div>
      </template>
    </b-modal>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isComponentModalActive: false,
    };
  },

};
</script>
