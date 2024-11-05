<script setup>
import {
  Bars4Icon,
  UserCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/vue/24/outline'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <header
    class="flex h-16 items-center justify-between bg-light px-4 shadow"
    role="banner"
  >
    <button
      class="rounded-full p-2 transition-colors duration-300 hover:bg-secondary focus:outline-accent"
      aria-label="Toggle menu"
    >
      <Bars4Icon class="w-6" />
    </button>
    <div>
      <Menu as="div" class="relative inline-block text-left">
        <MenuButton
          class="group flex items-center gap-2 p-2 focus:outline-accent"
        >
          <img
            src="https://randomuser.me/api/portraits/women/66.jpg"
            alt="User avatar"
            class="w-10 rounded-full"
          />
          <small>Jane Doe</small>
          <ChevronDownIcon
            class="h-6 w-6 text-dark transition-colors duration-300 group-hover:text-dark/60"
            aria-hidden="true"
          />
        </MenuButton>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            role="menu"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-accent text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  role="menuitem"
                >
                  <UserCircleIcon
                    :active="active"
                    class="mr-2 h-6 w-6"
                    aria-hidden="true"
                  />
                  Profile
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-accent text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  role="menuitem"
                >
                  <ArrowLeftStartOnRectangleIcon
                    :active="active"
                    class="mr-2 h-6 w-6"
                    aria-hidden="true"
                  />
                  Logout
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
