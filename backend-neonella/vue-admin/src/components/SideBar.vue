<script setup>
import NeonellaLogo from '@/assets/images/neonella-logo.svg'
import {
  HomeIcon,
  UsersIcon,
  ListBulletIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/outline'

const links = [
  {
    name: 'app.dashboard',
    icon: HomeIcon,
    label: 'Dashboard',
  },
  {
    // name: 'app.users',
    icon: UsersIcon,
    label: 'Products',
  },
  {
    // name: 'app.requests',
    icon: ListBulletIcon,
    label: 'Users',
  },
  {
    // name: 'app.requests',
    icon: ChartBarIcon,
    label: 'Reports',
  },
]
</script>

<template>
  <aside
    class="flex min-h-screen w-[200px] flex-col items-center bg-secondary"
    aria-label="Sidebar"
  >
    <img :src="NeonellaLogo" alt="Neonella Logo" class="h-32 w-32" />
    <nav class="w-full">
      <ul class="space-y-2">
        <li v-for="link in links" :key="link.name" class="px-2 transition-all">
          <RouterLink
            :to="{ name: link.name }"
            class="flex items-center rounded-lg px-2 py-2 transition-transform duration-150 hover:bg-accent hover:text-white focus:outline-accent active:scale-95"
            :aria-label="`Navigate to ${link.label}`"
          >
            <span class="mr-2">
              <component
                :is="link.icon"
                class="w-5"
                aria-hidden="true"
              ></component>
            </span>
            <span>{{ link.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped></style>
