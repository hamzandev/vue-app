<script setup lang="ts">
import { computed, ref, Suspense, watch } from 'vue';
import Button from './Button.vue';

const props = defineProps({
    todoId: {
        type: Number,
        required: true,
    }
})

const todoId = ref(props.todoId)
const data = ref(null as any)
const status = computed(() => data?.value?.completed ? "Completed" : "Uncompleted")

watch(
    todoId,
    async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
        )
        data.value = await response.json()
    },
    { immediate: true }
)
</script>

<template>
    <div class="flex flex-col items-center space-y-2 shadow-lg p-6 rounded-xl">
        <span class="font-bold text-green-500 text-xl capitalize">{{ data?.title }}</span>
        <p class="text-gray-500">Status : {{ status }}</p>
        <Button @click="todoId = Math.floor(Math.random() * 100) + 1">Change Todo</Button>
    </div>
</template>