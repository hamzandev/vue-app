<script setup lang="ts">
import FormExample from '@/components/FormExample.vue';
import Todo from '@/components/Todo.vue';
</script>

<template>
  <div class="flex flex-col items-center space-x-2 text-center">
    <h1 class="my-3 font-bold text-3xl">This is an about page</h1>
    <FormExample />
    <div class="gap-5 grid md:grid-cols-3 my-8">
      <span class="col-span-3">Todo Lists</span>
      <Todo v-for="(item) in 6" :key="item" :todo-id="item"/>
    </div>
  </div>
</template>