<template>
  <v-app>
    <Header />
    <v-col>
      <v-row class="control">
        <LedButton txt="fade leds" />
        <ColorPicker />
        <ColorPicker />
      </v-row>
      <v-divider></v-divider>
    </v-col>
  </v-app>
</template>

<script>
import Header from './components/Header'
import ColorPicker from './components/ColorPicker'
import LedButton from './components/LedButton'
export default {
  name: 'App',

  components: {
    Header,
    ColorPicker,
    LedButton,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .control-element {
    margin: 10px;
  }
</style>
