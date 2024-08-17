<script setup lang="ts">
import Alert from '@/components/Alert.vue';
import FormExample from '@/components/FormExample.vue';
import Todo from '@/components/Todo.vue';
</script>

<template>
  <div class="flex flex-col items-center space-x-2 text-center">

    <Alert>
      <template v-slot:icon>
        <span class="text-4xl">
          ✨
        </span>
      </template>
      <template v-slot:title>
        <span class="font-bold text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </template>
      <template v-slot:description>
        <span class="text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi culpa quasi quas repellendus totam
          distinctio
          alias cumque sed.
        </span>
      </template>
      <template v-slot:actions>
          <button class="text-2xl">🔕</button>
      </template>
    </Alert>

    <h1 class="my-3 font-bold text-3xl">This is an about page</h1>
    <FormExample />
    <div class="gap-5 grid md:grid-cols-3 my-8">
      <span class="col-span-3">Todo Lists</span>
      <Todo v-for="(item) in 6" :key="item" :todo-id="item" />
    </div>
  </div>
</template>