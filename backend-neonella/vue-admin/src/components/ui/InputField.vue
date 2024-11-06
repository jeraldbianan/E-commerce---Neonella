<script setup>
import { defineProps } from "vue";

defineProps({
  id: String,
  name: String,
  type: {
    type: String,
    default: "text",
  },
  autocomplete: String,
  placeholder: String,
  required: Boolean,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :autocomplete="autocomplete"
    :placeholder="placeholder"
    :required="required"
    :value="modelValue"
    @input="updateValue"
    class="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm/6"
  />
</template>
