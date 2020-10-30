<template>
  <v-app>
    <Header />
    <v-col>
      <FadeLed />
      <v-divider></v-divider>
      <ClearLed />
      <v-divider></v-divider>
      <SetLed />
      <v-divider></v-divider>
      <RainbowLed />
    </v-col>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import FadeLed from "./components/FadeLed";
import ClearLed from "./components/ClearLed";
import SetLed from "./components/SetLed";
import RainbowLed from "./components/RainbowLed";
export default {
  name: "App",

  components: {
    Header,
    FadeLed,
    ClearLed,
    SetLed,
    RainbowLed,
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
