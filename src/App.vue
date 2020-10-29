<template>
  <v-app>
    <v-col>
      <v-row>
        <v-btn
          elevation="2"
        >Fade LEDs</v-btn>
        <v-color-picker
          itemid="left-color"
          dot-size="25"
          swatches-max-height="20"
          elevation="2"
        >
        </v-color-picker>
        <v-color-picker
          itemid="right-color"
          dot-size="25"
          swatches-max-height="20"
          elevation="2"
        >
        </v-color-picker>
      </v-row>
      <v-divider></v-divider>
    </v-col>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
