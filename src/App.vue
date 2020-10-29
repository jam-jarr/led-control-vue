<template>
  <v-app>
    <Header />
    <v-col>
      <FadeControl />
      <v-divider></v-divider>
    </v-col>
  </v-app>
</template>

<script>
import Header from './components/Header'
import FadeControl from './components/FadeControl'
export default {
  name: 'App',

  components: {
    Header,
    FadeControl,
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
