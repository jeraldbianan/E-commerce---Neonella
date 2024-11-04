<script setup>
import NeonellaLogo from '@/assets/images/neonella-logo.svg'

defineProps({
  title: String,
})
</script>

<template>
  <div
    class="flex min-h-screen w-screen items-center justify-center bg-[url('@/assets/images/login-bg.jpg')] bg-cover bg-center bg-no-repeat px-4 md:px-0"
  >
    <div
      class="flex max-w-[400px] flex-1 -translate-y-20 flex-col items-center rounded-lg border bg-secondary p-10"
    >
      <img :src="NeonellaLogo" alt="Neonella Logo" class="h-32 w-32" />

      <h1
        class="text-center font-pd text-3xl/3 font-medium leading-none text-dark"
      >
        {{ title }}
      </h1>

      <div class="mb-5 mt-5 w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
