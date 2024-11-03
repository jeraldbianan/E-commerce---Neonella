<script setup>
import { useCounterStore } from './store/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div>{{ counterStore.count }}</div>
  <button @click="counterStore.increment" class="bg-black px-4 py-2 text-white">
    Increment
  </button>
</template>

<style lang="scss" scoped></style>
