<script setup lang="ts">
import { ref, computed } from 'vue';
import InputField from './InputField.vue';
import Button from './Button.vue';

const formValue = ref({
  username: '',
  email: '',
});
const isUsernameValid = ref(false);
const isEmailValid = ref(false);

const isFormValid = computed(() => isUsernameValid.value && isEmailValid.value);

function validateUsername(value: any) {
  return value.length >= 3 || 'Username harus minimal 3 karakter';
}

function validateEmail(value: any) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) || 'Email tidak valid';
}

function handleUsernameValidation(result: any) {
  isUsernameValid.value = result.isValid;
}

function handleEmailValidation(result: any) {
  isEmailValid.value = result.isValid;
}

function handleSubmit() {
  if (isFormValid.value) {
    alert('Form submitted: ' + JSON.stringify({ username: formValue.value.username, email: formValue.value.email }));

    formValue.value.username = '';
    formValue.value.email = '';
  }
}
</script>


<template>
  <form @submit.prevent="handleSubmit" class="max-w-sm">
    <InputField
      type="text"
      placeholder="Username"
      v-model="formValue.username"
      :rules="validateUsername"
      @validated="handleUsernameValidation"
      />
      <!-- ============ @validated="handleUsernameValidation" adalah emit 
      event yang diemisi dari component InputField ============-->

      <InputField
      placeholder="Email Address"
      type="email"
      v-model="formValue.email"
      :rules="validateEmail"
      autocomplete="off"
      @validated="handleEmailValidation"
    />
    <!-- <button type="submit" :disabled="!isFormValid">Submit</button> -->
    <Button type="submit" :disabled="!isFormValid">Submit</Button>
  </form>
</template>