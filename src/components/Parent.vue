<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';
import Button from './Button.vue';

const name = ref<string>("default name")

function handleSayHello(name: string) {
    alert(`Hello ${name}!`)
}
</script>

<template>
    <div>
        <span>Parent</span>
        <Child :name="name" @say-hello="handleSayHello"/>
        <Button @click="name = 'changed name'">Change Name</Button>
    </div>
</template>