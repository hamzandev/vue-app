<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { provide, inject } from 'vue';

provide('message', 'This is Provide message from App.vue')

// Provide/Inject with i18n plugin
const i18n = inject('i18n')
console.log(`(App.vue) i18n greeting: ${(i18n as any)?.greetings.hello}`);

</script>

<template>
  <Header />
  <main class="mx-auto min-h-screen container">
    <RouterView />
  </main>
  <Footer />
</template>