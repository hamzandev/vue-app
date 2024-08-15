<script setup lang="ts">
import { computed, ref } from 'vue';
import Button from './Button.vue';

const libs = [
    "vue",
    "react",
    "svelte",
    "solid",
    "lit-element",
    "angular",
    "preact",
    "marko",
]

const inputText = ref<string>("")
const libraries = ref<string[]>([])
const loading = ref<boolean>(false);

const librariesList = computed(() => {
    return libraries.value.length > 0 ? libraries.value.join(", ") : "-"
})

async function handleSubmit(event: any) {
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(event.target);
    loading.value = false
    alert("Success cuy!")
}
</script>

<template>

    <span class="h-8 font-bold text-green-500 text-xl">Text you typed : {{ inputText }}</span>
    <span class="h-8 font-bold text-green-500 text-xl">
        Libraries you select : {{ librariesList }}
    </span>

    <form class="flex flex-col space-y-2 mx-auto my-5 max-w-xs" @submit.prevent="handleSubmit($event)">
        <input type="text" placeholder="Type count here" v-model.lazy="inputText"
            class="border-gray-400 mb-3 p-2 border rounded-lg focus-within:ring focus-within:ring-green-300 focus-within:outline-none">
        <span class="text-gray-400 text-sm italic">This input value will be lazy</span>

        <span class="font-semibold text-lg">Select your favorite library</span>
        <div class="gap-2 grid grid-cols-2">
            <div class="flex space-x-1" v-for="(lib) in libs" :key="lib">
                <input type="checkbox" :name="lib" :id="lib" v-model="libraries" :value="lib">
                <label :for="lib" class="capitalize">{{ lib }}</label>
            </div>
        </div>
        <Button type="submit" :disabled="loading">Submit</Button>
    </form>
</template>