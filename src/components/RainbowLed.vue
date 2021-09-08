<template>
  <v-row>
    <LedButton txt="Rainbow" v-on:clicked="send" />
    <v-col>
      <v-slider
        step="0.1"
        min="0"
        max="3"
        v-model="rotationSpeed"
        label="Speed"
        thumb-label="always"
      />
      <v-slider
        min="0"
        max="360"
        v-model="angleDiff"
        label="Spectrum"
        thumb-label="always"
      />
    </v-col>
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
          name: "rainbow",
          args: [this.angleDiff, `-r ${this.rotationSpeed}`],
        },
      };
      console.log(data);
      console.log(this.rs);
      common.post(data, "led_control");
    },
    test(msg) {
      console.log(msg);
    },
  },
  data: () => {
    return {
      rotationSpeed: null,
      angleDiff: null,
    };
  },
};
</script>

<style>
</style>