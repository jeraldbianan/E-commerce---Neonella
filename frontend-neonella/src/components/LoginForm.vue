<script setup></script>

<template>
  <div
    class="bg-secondary flex min-h-full max-w-[400px] flex-1 flex-col justify-center rounded-lg border p-10"
  >
    <h1
      class="font-pd text-dark text-center text-3xl/3 font-medium tracking-tight"
    >
      Sign in to your account
    </h1>

    <div class="mt-10">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="text-dark block text-sm/6 font-medium"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="focus:ring-accent text-dark block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="text-dark block text-sm/6 font-medium"
              >Password</label
            >
            <div class="text-sm">
              <a href="#" class="text-accent hover:text-accent/80 font-semibold"
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
              class="focus:ring-accent text-dark block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="bg-accent hover:bg-accent/90 text-light focus-visible:outline-accent flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="text-dark mt-10 text-center text-sm/6">
        Not a member?
        {{ ' ' }}
        <a href="#" class="text-accent hover:text-accent/80 font-semibold"
          >Register</a
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
