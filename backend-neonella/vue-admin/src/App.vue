<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "./store/auth";

const authStore = useAuthStore();

onMounted(() => {
  authStore.initialize();
});
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
