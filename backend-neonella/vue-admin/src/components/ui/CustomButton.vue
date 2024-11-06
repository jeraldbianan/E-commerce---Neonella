<script setup>
defineProps({
  type: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
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
    :disabled="disabled"
    class="flex items-center justify-center rounded-md bg-accent text-sm/6 font-semibold text-light shadow-sm transition-all hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[.98]"
    :class="{ 'cursor-not-allowed': disabled, 'hover:bg-accent/60': disabled }"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
