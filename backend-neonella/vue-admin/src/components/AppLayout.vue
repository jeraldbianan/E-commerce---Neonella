<script setup>
import Sidebar from '@/components/SideBar.vue'
</script>

<template>
  <div class="flex min-h-full">
    <!-- sidebar -->
    <Sidebar />

    <!-- main content -->
    <div class="flex-1">
      <header class="h-8 bg-white shadow">Header</header>

      <!-- content -->
      <main>
        <RouterView></RouterView>
      </main>

      <!-- content -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
