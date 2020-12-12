<template>
  <v-app>
    <Header />
    <v-main>
      <v-col id="main-col">
        <Presets />
        <v-divider inset></v-divider>
        <SetLed />
        <v-divider inset></v-divider>
        <FadeLed />
        <v-divider inset></v-divider>
        <RainbowLed />
        <v-divider inset></v-divider>
        <ClearLed />
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import FadeLed from "./components/FadeLed";
import ClearLed from "./components/ClearLed";
import SetLed from "./components/SetLed";
import RainbowLed from "./components/RainbowLed";
import Presets from "./components/Presets";
export default {
  name: "App",

  components: {
    Header,
    FadeLed,
    ClearLed,
    SetLed,
    RainbowLed,
    Presets,
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
