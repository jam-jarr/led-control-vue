<template>
  <v-row id="main-row" justify="space-between" align-content="center">
    <v-radio-group row v-on:change="index = $event">
      <v-radio
        v-for="n in 10"
        v-bind:key="n"
        v-bind:label="n.toString()"
        v-bind:value="n"
      />
    </v-radio-group>
    <v-col id="ls-col">
      <v-row id="ls-row">
        <!-- <v-btn v-on:click="send('load')" class="ls-btn" x-large>Load</v-btn> -->
        <!-- <v-btn v-on:click="send('save')" class="ls-btn" x-large>Save</v-btn> -->
        <LedButton txt="load" @clicked="send('load')" />
        <LedButton txt="save" @clicked="send('save')" />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import common from "../utils/common";
import LedButton from "./LedButton";
export default {
  components: {
    LedButton,
  },
  methods: {
    send(method) {
      const data = {
        method: method,
        index: this.index,
      };
      console.log(data);
      common.post(data, "presets");
    },
  },
  data: () => {
    return {
      index: null,
    };
  },
};
</script>

<style scoped>
#main-row {
  display: block;
}
</style>