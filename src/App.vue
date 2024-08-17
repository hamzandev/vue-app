<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { provide } from 'vue';

provide('message', 'This is Provide message from App.vue')
</script>

<template>
  <Header />
  <main class="mx-auto min-h-screen container">
    <RouterView />
  </main>
  <Footer />
</template>