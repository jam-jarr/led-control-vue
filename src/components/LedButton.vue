<template>
  <v-btn
    class="control-element"
    elevation="2"
    x-large
    v-on:click="$emit('clicked')"
    v-bind="block"
    >{{ txt }}</v-btn
  >
</template>

<script>
export default {
  name: "LedButton",
  props: ["txt"],
  computed: {
    block() {
      return this.$vuetify.breakpoint.xs
        ? {
            block: true,
          }
        : null;
    },
  },
};
</script>

<style scoped>
</style>