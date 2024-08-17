<script setup lang="ts">
</script>

<template>
    <div class="flex items-center gap-2 bg-green-500/50 p-4 rounded-lg text-start">
        <slot name="icon">
            <!-- Fallback slot content -->
            😐
        </slot>
        <div class="flex flex-col">
            <slot name="title">
                <!-- Fallback slot content -->
                Alert Title
            </slot>
            <slot name="description">
                <!-- Fallback slot content -->
                AlertDescription
            </slot>
        </div>

        <div v-if="$slots.actions">
            <slot name="actions">
                <!-- Fallback slot content -->
                <Button class="w-max">Action</Button>
            </slot>
        </div>
    </div>
</template>