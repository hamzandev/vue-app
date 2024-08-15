<script setup lang="ts">
import Button from '@/components/Button.vue';
import { computed } from 'vue';

const courses = [
    {
        name: 'frontend',
        color: 'bg-green-200',
        price: 12300
    },
    {
        name: 'backend',
        color: 'bg-red-200',
        price: 32100
    },
    {
        name: 'database',
        color: 'bg-blue-200',
        price: 10920
    },
    {
        name: 'fullstack',
        color: 'bg-purple-200',
        price: 27271
    },
]

// computed properties examples
const totalCoursePrice = computed(() => "$" + courses.reduce((a, b) => a + b.price, 0).toString())
const totalCourse = computed(() => courses.length)
</script>

<template>
    <div class="flex justify-between items-center mt-5">
        <h1 class="mt-5 font-bold text-3xl"> Courses</h1>
        <div class="flex flex-col items-end space-y-1">
            <span class="font-bold text-gray-500 text-xl">Total Courses : {{ totalCourse }}</span>
            <span class="text-green-500">Total Price : {{ totalCoursePrice }}</span>
        </div>
    </div>
    <div class="gap-8 grid md:grid-cols-3 py-10">
        <div id="card" v-for="(_, index) in Array(10)" :key="index"
            class="shadow hover:shadow-lg rounded-xl duration-200 overflow-hidden">
            <div class="w-full aspect-video">
                <img src="https://images.unsplash.com/photo-1592609931041-40265b692757?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="vue" class="w-full h-full object-cover">
            </div>

            <div class="space-y-2 grid p-5">
                <div class="flex items-center space-x-2 text-sm">
                    <span :class="`${course.color} mr-2 px-2 capitalize py-1 text-xs rounded-lg text-gray-800`"
                        v-for="(course, index) in courses" :key="index">
                        {{ course.name }}
                    </span>
                </div>
                <h1 class="font-bold text-2xl">VueJS Basic with scrip setup</h1>
                <span class="font-bold text-green-500 text-lg">{{ totalCoursePrice }}</span>
                <p class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore!</p>
                <Button class="place-self-end">📄 See Details</Button>
            </div>
        </div>
    </div>
</template>