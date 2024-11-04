<script setup>
import { useCounterStore } from './store/counter'

const counterStore = useCounterStore()
</script>

<template>
  {{ counterStore.count }}
  <button
    @click="counterStore.increment"
    class="rounded bg-purple-500 px-4 py-2 text-white"
  >
    Increment
  </button>
</template>
