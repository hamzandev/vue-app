<script setup lang="ts">
import { computed } from 'vue';
import Button from './Button.vue';


const props = defineProps({
    name: String
})

// ==> Defining ref as a reactive value, 
// ==> it will make the value ❎ not reactive
/* const reactiveName = ref<string | undefined>(props.name) */

// ==> Defining a computed property 
// ==> it will make the value ✅ actually reactive
const reactiveName = computed(() => props.name)


const emit = defineEmits(['sayHello']);

function sayHello() {
    emit('sayHello', props.name)
}
</script>

<template>
    <div>
        <span>Child with Prop: {{ props.name }}</span>
        <p>Reactive Prop: {{ reactiveName }}</p>
        <Button @click="sayHello" class="mb-2">Say Hello.</Button>
    </div>
</template>