<script setup lang="ts">
import { ref } from 'vue';


const theText = ref<string>("I am Clickable Text")

// handle and receive global $event variable
function handleClickText(event: any) {
    
    alert(`You clicked on "${event.target.innerText}"`)
}
</script>

<template>
    <div class="flex flex-col space-y-3 my-10 text-center">
        <!-- passing the global $event variable -->
        <span @click="handleClickText($event)" class="font-bold text-3xl text-green-500 uppercase cursor-pointer">
            {{ theText }}
        </span>
        <span @click.ctrl.alt="handleClickText($event)" class="text-gray-500 hover:underline cursor-pointer">
            Try to press <code class="bg-gray-200 p-1 rounded text-xs">ctrl+alt+click</code> me to trigger the event.
        </span>
    </div>
</template>