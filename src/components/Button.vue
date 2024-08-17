<script setup lang="ts">
const props = defineProps(['class'])
</script>

<template>
    <!-- bind all given attributes when component is called -->
    <button v-bind="$attrs" class="bg-green-500 disabled:bg-green-300 px-3 py-2 rounded-lg text-white" :class="props.class">
        <slot/>
    </button>
</template>