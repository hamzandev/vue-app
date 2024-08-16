<script setup lang="ts">
defineProps({
    name: String,
})
</script>

<template>
    <div class="flex items-center border-gray-200 p-2 border">
        <span>{{ name }}</span>
    </div>
</template>