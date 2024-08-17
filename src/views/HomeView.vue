<script setup lang="ts">
import Alert from '@/components/Alert.vue';
import Awesome from '@/components/Awesome.vue';
import Button from '@/components/Button.vue';
import ClickableText from '@/components/ClickableText.vue';
import Counter from '@/components/Counter.vue';
import Framework from '@/components/Framework.vue';
import Parent from '@/components/Parent.vue';
import Person from '@/components/Person.vue';
import { inject } from 'vue';

const message = inject('message')

function handleTriggerProvideValue() {
  alert(message);
}
</script>

<template>
  <Button @click="handleTriggerProvideValue">Trigger Provide value.</Button>
  <Counter />
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi culpa quasi quas repellendus totam distinctio
        alias cumque sed.
      </span>
    </template>
  </Alert>

  <Person />
  <Awesome />
  <ClickableText />
  <Parent />
  <div class="gap-3 grid mx-auto my-10 max-w-xs">
    <span class="font-bold text-center text-green-500 text-xl uppercase">List of Frameworks</span>
    <Framework name="Vue" />
    <Framework name="React" />
    <Framework name="Svelte" />
  </div>
</template>
