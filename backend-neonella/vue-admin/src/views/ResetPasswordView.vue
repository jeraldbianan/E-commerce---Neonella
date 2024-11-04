<script setup>
import { onMounted, ref } from 'vue'
import GuestLayout from '@/components/GuestLayout.vue'
import InputField from '@/components/ui/InputField.vue'

const newPasswordRef = ref(null)

onMounted(() => {
  newPasswordRef.value.$el.focus()
})
</script>

<template>
  <GuestLayout title="Reset your password">
    <form class="space-y-6" method="POST">
      <div>
        <label for="new-password" class="block text-sm/6 font-medium text-dark"
          >New Password</label
        >
        <div class="mt-2">
          <InputField
            ref="newPasswordRef"
            id="new-password"
            name="password"
            type="password"
            required
          />
        </div>
      </div>

      <div>
        <label
          for="confirm_password"
          class="block text-sm/6 font-medium text-dark"
          >Confirm Password</label
        >
        <div class="mt-2">
          <InputField
            id="confirm_password"
            name="confirm_password"
            type="password"
            required
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm/6 font-semibold text-light shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Reset Password
        </button>
      </div>
    </form>
  </GuestLayout>
</template>

<style lang="scss" scoped></style>
