<script setup>
import Sidebar from '@/components/SideBar.vue'
import TopHeader from '@/components/TopHeader.vue'
</script>

<template>
  <div class="flex min-h-full">
    <!-- sidebar -->
    <Sidebar />

    <!-- main content -->
    <div class="flex-1">
      <TopHeader />

      <!-- content -->
      <main class="p-6">
        <div class="rounded-md bg-secondary p-4">
          <RouterView></RouterView>
        </div>
      </main>

      <!-- content -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
