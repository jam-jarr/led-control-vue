<template>
    <v-btn
        class="control-element"
        elevation="2"
        x-large
        v-on:click="test('data')"
    >{{txt}}</v-btn>
</template>

<script>
export default {
    name: "LedButton",
    props: ["txt"],
    methods: {
        test() {
            fetch("http://192.168.0.65:8080/led_control", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"script":{"name":"fade","args":["--hsv",[0,255,0],[255,0,0]]}}),
            });
        }
    }
}
</script>

<style scoped>

</style>