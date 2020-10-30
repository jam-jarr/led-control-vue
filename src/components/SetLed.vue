<template>
  <v-row>
    <LedButton txt="Set leds" v-on:clicked="send" />
    <ColorPicker v-on:input="color = $event.rgba" />
  </v-row>
</template>

<script>
import LedButton from "./LedButton";
import ColorPicker from "./ColorPicker";
import common from "../utils/common";
export default {
  components: {
    LedButton,
    ColorPicker,
  },
  methods: {
    send() {
      const data = {
        script: {
          name: "set_led",
          args: [[this.color.r, this.color.g, this.color.b]],
        },
      };
      common.post(data);
    },
  },
  data: () => {
    return {
      color: null,
    };
  },
};
</script>

<style scoped>
</style>