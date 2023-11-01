<template>
    <p>{{counter}}</p>
    <button @click.prevent="click">Click</button>
</template>

<script setup>
// export default ({
//     data() {
//         return {
//             counter: 0
//         }
//     },
//     methods: {
//         click() {
//             this.counter++
//         }
//     }
// })

import {ref, reactive} from 'vue'

const counter = ref(0)
const data = reactive({counter:0})

function click() {
    counter.value++
    // data.counter++
}
</script>

