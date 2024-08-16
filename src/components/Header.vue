<script setup lang="ts">
import GlobalSearch from "@/components/GlobalSearch.vue"
</script>

<template>
    <header class="top-0 sticky bg-white/80 backdrop-blur py-2 border-b border-b-gray-200">
        <div class="flex justify-between items-center space-x-8 mx-auto container">
            <div id="logo" class="flex items-center space-x-1 w-2/12">
                <span class="text-xl">⚡</span>
                <span class="font-bold text-green-500 uppercase">Vue App</span>
            </div>
            <div id="menus" class="flex items-center space-x-5 w-8/12 text-gray-500">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/courses">Courses</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/form">Form</RouterLink>
            </div>
            <div id="global-search" class="flex items-center w-2/12">
                <GlobalSearch />  
            </div>
        </div>
    </header>
</template>