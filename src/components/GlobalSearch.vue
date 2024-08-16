<script setup lang="ts">
import { onMounted, ref } from 'vue';

const input = ref(null as any)
// implementation of template refs to <input/> tag
onMounted(() => {
    input.value.focus()
})
</script>

<template>
    <form class="flex items-center">
        <input type="search" ref="input" placeholder="🔍 Quick Search..."
            class="border-gray-400 mb-3 p-2 border rounded-lg focus-within:ring focus-within:ring-green-300 focus-within:outline-none">
    </form>
</template>