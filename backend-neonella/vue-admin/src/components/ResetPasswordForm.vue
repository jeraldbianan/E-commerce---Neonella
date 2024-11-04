<script setup>
import { ref, onMounted } from 'vue'
import InputField from './ui/InputField.vue'

const newPasswordRef = ref(null)

onMounted(() => {
  newPasswordRef.value.$el.focus()
})
</script>

<template>
  <form class="space-y-6" action="#" method="POST">
    <div>
      <label for="new-password" class="block text-sm/6 font-medium text-dark"
        >New Password</label
      >
      <div class="mt-2">
        <InputField
          id="new-password"
          name="password"
          type="password"
          required
          ref="newPasswordRef"
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
</template>

<style lang="scss" scoped></style>
