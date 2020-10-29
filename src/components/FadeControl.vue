<template>
    <v-row>
        <LedButton txt="fade leds" v-on:clicked="post"/>
        <ColorPicker v-on:input="leftColor=$event.rgba"/>
        <ColorPicker v-on:input="rightColor=$event.rgba"/>
        <v-radio-group v-on:change="colorSpace=$event">
            <v-radio label="RGB" value="--rgb"/>
            <v-radio label="HSV" value="--hsv"/>
            <v-radio label="LAB" value="--lab"/>
        </v-radio-group>
    </v-row>
</template>

<script>
import LedButton from './LedButton'
import ColorPicker from './ColorPicker'
export default {
    components: {
        LedButton,
        ColorPicker,
    },
    methods: {
        post() {
            const data = {
                script: {
                    name: "fade",
                    args: [this.colorSpace, [this.rightColor.r, this.rightColor.g, this.rightColor.b], [this.leftColor.r, this.leftColor.g, this.leftColor.b]]
                }
            }

            fetch("http://192.168.0.65:8080/led_control", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
        },
        test(msg) {
            console.log(msg)
        }
    },
    data: () => {
        return {
            leftColor: null,
            rightColor: null,
            colorSpace: null,
        }
    }
}
</script>

<style scoped>

</style>