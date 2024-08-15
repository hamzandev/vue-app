<template>
    <!-- bind all given attributes when component is called -->
    <button v-bind="$attrs" class="bg-green-500 px-3 py-2 rounded-lg text-white">
        <slot/>
    </button>
</template>