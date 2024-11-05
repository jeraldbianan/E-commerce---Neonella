<script setup>
import NeonellaLogo from "@/assets/images/neonella-logo.svg";
import {
  HomeIcon,
  UsersIcon,
  ListBulletIcon,
  ChartBarIcon,
} from "@heroicons/vue/24/outline";

defineProps({
  status: Boolean,
});

const links = [
  {
    name: "app.dashboard",
    icon: HomeIcon,
    label: "Dashboard",
  },
  {
    name: "app.products",
    icon: UsersIcon,
    label: "Products",
  },
  {
    name: "app.users",
    icon: ListBulletIcon,
    label: "Users",
  },
  {
    name: "app.reports",
    icon: ChartBarIcon,
    label: "Reports",
  },
];
</script>

<template>
  <aside
    class="flex min-h-screen w-[200px] flex-col items-center bg-secondary transition-all"
    aria-label="Sidebar"
    :aria-hidden="!status"
  >
    <img :src="NeonellaLogo" alt="Neonella Logo" class="h-32 w-32" />
    <nav class="w-full">
      <ul class="space-y-2">
        <li v-for="link in links" :key="link.name" class="px-2 transition-all">
          <RouterLink
            :to="{ name: link.name }"
            class="flex items-center rounded-lg px-2 py-2 transition-transform duration-150 hover:bg-accent hover:text-white focus:outline-accent active:scale-95"
            exact-active-class="bg-accent text-white"
            :aria-label="`Navigate to ${link.label}`"
            :tabindex="status ? 0 : -1"
          >
            <span class="mr-2">
              <component :is="link.icon" class="w-5" aria-hidden="true"></component>
            </span>
            <span>{{ link.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped></style>
