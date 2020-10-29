<template>
    <v-btn
        class="control-element"
        elevation="2"
        x-large
        v-on:click="$emit('clicked')"
    >{{txt}}</v-btn>
</template>

<script>
export default {
    name: "LedButton",
    props: ["txt"],
}
</script>

<style scoped>

</style>