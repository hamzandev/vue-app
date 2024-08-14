<template>
    <header class="top-0 sticky bg-white/80 backdrop-blur py-3 border-b border-b-gray-200">
        <div class="flex items-center space-x-8 mx-auto container">
            <div id="logo" class="flex items-center space-x-1 me-10">
                <span class="text-xl">⚡</span>
                <span class="font-bold text-green-500 uppercase">Vue App</span>
            </div>
            <div id="menus" class="flex items-center space-x-5 text-gray-500">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
        </div>
    </header>
</template>