<script setup></script>

<template>
  <form class="space-y-6" action="#" method="POST">
    <div>
      <label for="email" class="block text-sm/6 font-medium text-dark"
        >Email address</label
      >
      <div class="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required=""
          class="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm/6"
        />
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label for="password" class="block text-sm/6 font-medium text-dark"
          >Password</label
        >
        <div class="text-sm">
          <a
            href="#"
            class="font-semibold text-accent hover:text-accent/80 focus-visible:outline-accent"
            >Forgot password?</a
          >
        </div>
      </div>
      <div class="mt-2">
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required=""
          class="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm/6"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm/6 font-semibold text-light shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Sign in
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
