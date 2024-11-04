<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :autocomplete="autocomplete"
    :placeholder="placeholder"
    :required="required"
    class="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm/6"
  />
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  id: String,
  name: String,
  type: String || 'text',
  autocomplete: String,
  placeholder: String,
  required: Boolean,
})
</script>
