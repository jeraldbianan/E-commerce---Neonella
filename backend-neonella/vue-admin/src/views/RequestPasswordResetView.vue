<script setup>
import { onMounted, ref } from 'vue'
import GuestLayout from '@/components/GuestLayout.vue'
import InputField from '@/components/ui/InputField.vue'

const emailRef = ref(null)

onMounted(() => {
  emailRef.value.$el.focus()
})
</script>

<template>
  <GuestLayout title="Forgot password">
    <form class="space-y-6" method="POST">
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
          class="font-semibold text-accent hover:text-accent/80"
          >Login</RouterLink
        >
      </p>
    </form>
  </GuestLayout>
</template>

<style lang="scss" scoped></style>
