<script setup>
import { ref } from "vue";
import Sidebar from "@/components/SideBar.vue";
import TopHeader from "@/components/TopHeader.vue";

const sidebarOpened = ref(true);

const toggleSidebar = () => {
  sidebarOpened.value = !sidebarOpened.value;
};
</script>

<template>
  <div class="flex min-h-full">
    <!-- sidebar -->
    <Sidebar :class="{ '-ml-[200px]': !sidebarOpened }" :status="sidebarOpened" />

    <!-- main content -->
    <div class="flex-1">
      <TopHeader @toggle-sidebar="toggleSidebar" />

      <!-- content -->
      <main class="p-6">
        <div class="rounded-md bg-secondary p-4">
          <RouterView v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
              <component :is="Component"></component>
            </Transition>
          </RouterView>
        </div>
      </main>

      <!-- content -->
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
