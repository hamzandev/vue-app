<script setup lang="ts">
import { useFetch } from '@/composable/fetch';

const { data, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10")

</script>

<template>
    <div>
        <h1 class="font-bold text-green-500 text-xl">Posts</h1>

        <div class="gap-8 grid grid-cols-3">
            <div class="shadow-lg p-6 rounded" v-for="(post, index) in data" :key="index">
                <span class="font-bold text-2xl text-gray-600">
                    {{ (post as any)?.title }}
                </span>
            </div>
        </div>
    </div>
</template>