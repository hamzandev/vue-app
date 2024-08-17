<script setup lang="ts">
import Awesome from '@/components/Awesome.vue';
import ClickableText from '@/components/ClickableText.vue';
import Counter from '@/components/Counter.vue';
import Framework from '@/components/Framework.vue';
import Parent from '@/components/Parent.vue';
import Person from '@/components/Person.vue';
</script>

<template>
  <Counter />
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
