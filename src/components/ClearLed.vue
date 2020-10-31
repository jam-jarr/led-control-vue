<template>
  <v-row>
    <LedButton txt="clear" v-on:clicked="send" />
  </v-row>
</template>

<script>
import LedButton from "./LedButton";
import common from "../utils/common";
export default {
  components: {
    LedButton,
  },
  methods: {
    send() {
      const data = {
        script: {
          name: "clear_led",
        },
      };
      common.post(data);
    },
  },
};
</script>

<style scoped>
</style>