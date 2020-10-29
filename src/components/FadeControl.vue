<template>
  <v-row>
    <LedButton txt="fade leds" v-on:clicked="send" />
    <ColorPicker v-on:input="leftColor = $event.rgba" />
    <ColorPicker v-on:input="rightColor = $event.rgba" />
    <v-radio-group v-on:change="colorSpace = $event">
      <v-radio label="RGB" value="--rgb" />
      <v-radio label="HSV" value="--hsv" />
      <v-radio label="LAB" value="--lab" />
    </v-radio-group>
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
          name: "fade",
          args: [
            this.colorSpace,
            [this.rightColor.r, this.rightColor.g, this.rightColor.b],
            [this.leftColor.r, this.leftColor.g, this.leftColor.b],
          ],
        },
      };
      common.post(data);
    },
  },
  data: () => {
    return {
      leftColor: null,
      rightColor: null,
      colorSpace: null,
    };
  },
};
</script>

<style scoped>
</style>