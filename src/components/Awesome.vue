<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';


const isAwesome = ref<boolean>(false)
function handleChangeAwesome() {
    isAwesome.value = !isAwesome.value
}
</script>

<template>
    <div class="flex flex-col items-center gap-2 mx-auto my-5 max-w-xs">
        <span class="font-bold text-2xl text-green-500" v-if="isAwesome">You're an awesome Guy! ✨</span>
        <span class="font-bold text-2xl text-green-500" v-else>You're a normal Guy 😐</span>

        <Button @click="handleChangeAwesome" class="w-max">
            {{ isAwesome ? 'Make me normal guy' : 'I wanna be awesome' }}
        </Button>
    </div>
</template>