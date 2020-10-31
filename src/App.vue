<template>
  <v-app>
    <Header />
    <v-col id="main-col">
      <SetLed />
      <v-divider inset></v-divider>
      <FadeLed />
      <v-divider inset></v-divider>
      <RainbowLed />
      <v-divider inset></v-divider>
      <ClearLed />
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
#main-col {
  padding-left: 10%;
  padding-right: 10%;
}
.v-divider {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
