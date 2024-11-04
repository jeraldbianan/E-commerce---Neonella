<script setup>
import InputField from '@/components/ui/InputField.vue'
import { onMounted, ref } from 'vue'

const emailRef = ref(null)

onMounted(() => {
  emailRef.value.$el.focus()
})
</script>

<template>
  <form class="space-y-6" action="#" method="POST">
    <div>
      <label for="email" class="block text-sm/6 font-medium text-dark"
        >Email address</label
      >
      <div class="mt-2">
        <InputField
          ref="emailRef"
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          placeholder="johndoe@test.com"
          required
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm/6 font-semibold text-light shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Send Link
      </button>
    </div>

    <p class="text-center">
      Remember your password?
      <RouterLink
        :to="{ name: 'login' }"
        class="text-accent/80 hover:text-accent"
        >Login</RouterLink
      >
    </p>
  </form>
</template>

<style lang="scss" scoped></style>
