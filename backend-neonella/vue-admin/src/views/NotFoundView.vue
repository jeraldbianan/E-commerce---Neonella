<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";
</script>

<template>
  <section class="flex h-screen items-center justify-center">
    <div class="flex justify-start">
      <h1
        class="flex h-24 items-center border-r-2 border-r-secondary px-6 text-7xl font-black text-accent"
      >
        404
      </h1>
      <div class="pl-8">
        <h2 class="mb-4 text-5xl font-bold">Page not found</h2>
        <p class="text-gray-600">Please check the URL and try again.</p>

        <div class="mt-10">
          <CustomButton
            @click="() => $router.push({ name: 'app.dashboard' })"
            type="button"
            class="px-4 py-2"
            aria-label="Go back home"
          >
            Go back home
          </CustomButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
