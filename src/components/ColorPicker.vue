<template>
    <v-color-picker
          class="control-element"
          itemid="left-color"
          dot-size="25"
          swatches-max-height="20"
          elevation="2"
          hide-canvas
          v-on:input="$emit('input', $event)"
        >
    </v-color-picker>
</template>

<script>
export default {
    name: "ColorPicker",
    data: () => {
        return {
            value: null,
        }
    }
}
</script>

<style scoped>

</style>