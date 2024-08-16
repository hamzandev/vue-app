
<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: String,
  rules: {
    type: Function,
    default: () => true
  }
});

const emit = defineEmits(['update:modelValue', 'validated']);

const isValid = ref(true);
const errorMessage = ref('');

function handleInput(event: any) {
  const value = event.target.value;
  emit('update:modelValue', value);
  
  // Validasi input
  const validationResult = props.rules(value);
  isValid.value = validationResult === true;
  errorMessage.value = typeof validationResult === 'string' ? validationResult : '';

  // Emit event validasi
  emit('validated', { 
    value, 
    isValid: isValid.value, 
    errorMessage: errorMessage.value 
  });
}

// Validasi ulang ketika prop rules berubah
watch(() => props.rules, () => {
  handleInput({ target: { value: props.modelValue } });
});
</script>

<template>
  <div class="flex flex-col gap-1 mb-3">
    <input
    class="border-gray-400 p-2 border rounded-lg focus-within:ring focus-within:ring-green-300 focus-within:outline-none"
    :value="modelValue"
    @input="handleInput"
    :class="{ 'error': !isValid }"
    v-bind="$attrs"
    />
    <span v-if="!isValid" id="error-message" class="text-red-500">{{ errorMessage }}</span>
  </div>
</template>
