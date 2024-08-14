<script setup lang="ts">
import { ref } from 'vue';


const count = ref<number>(0)
const inputCount = ref<string>("")

function incrementCount(): void {
    if (inputCount.value) count.value += Number(inputCount.value), inputCount.value = "";
    else count.value++;
}

function decrementCounter(): void {
    if (inputCount.value) count.value -= Number(inputCount.value), inputCount.value = "";
    else count.value--;

    if (count.value <= 0) count.value = 0;

}

</script>

<template>
    <main class="flex flex-col justify-center items-center my-5 text-center">
        <span class="font-bold text-7xl text-green-500">{{ count }}</span>
        <input type="number" placeholder="Type count here" v-model="inputCount"
            class="border-gray-400 mb-3 p-2 border rounded-lg focus-within:ring focus-within:ring-green-300 focus-within:outline-none">
        <div class="flex justify-center gap-1">
            <button @click="decrementCounter" class="bg-green-500 p-3 rounded-lg text-white">Decrement</button>
            <button @click="incrementCount" class="bg-green-500 p-3 rounded-lg text-white">Increment</button>
        </div>
    </main>
</template>