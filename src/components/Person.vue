<script setup lang="ts">
import { reactive, ref } from 'vue';


const person = reactive({
    profile: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
    },

    get fullName(): string {
        return `${person.profile.firstName} ${person.profile.lastName}`;
    },

    set fullName(fullName: string) {
        const [firstName, lastName] = fullName.split(' ');
        person.profile.firstName = firstName;
        if (lastName != undefined) person.profile.lastName = lastName
        else person.profile.lastName = '';
    },

    get age(): number {
        return person.profile.age;
    },

    set age(age: number) {
        person.profile.age = age
    }
})

const personObj = ref({
    fullName: "",
    age: ""
})

function handleUpdatePerson() {
    person.fullName = personObj.value.fullName;
    if(personObj.value.age != '') person.age = Number(personObj.value.age);
    
    personObj.value.fullName = "";
    personObj.value.age = "";

}
</script>


<template>
    <main class="flex flex-col items-center my-10">
        <span class="mb-3 font-bold text-3xl text-green-500 capitalize">
            {{ person.fullName }} ✨ {{ person.profile.age }}
        </span>
        <div class="flex items-baseline gap-2">
            <input type="text" placeholder="Type Fullname" v-model="personObj.fullName"
                class="border-gray-400 mb-3 p-2 border rounded-lg focus-within:ring focus-within:ring-green-300 focus-within:outline-none">
            <input type="number" placeholder="Age" v-model="personObj.age"
                class="border-gray-400 mb-3 p-2 border rounded-lg focus-within:ring focus-within:ring-green-300 w-16 focus-within:outline-none">
            <button @click="handleUpdatePerson" class="bg-green-500 p-3 rounded-lg text-white">Update</button>
        </div>
    </main>
</template>