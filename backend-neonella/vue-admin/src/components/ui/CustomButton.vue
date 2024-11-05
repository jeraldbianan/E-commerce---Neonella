<script setup>
defineProps({
  type: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};
</script>

<template>
  <button
    @click="onClick"
    :type="type"
    class="flex justify-center rounded-md bg-accent text-sm/6 font-semibold text-light shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
