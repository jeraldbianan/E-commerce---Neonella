<script setup>
import { onMounted, ref } from "vue";
import GuestLayout from "@/components/GuestLayout.vue";
import InputField from "@/components/ui/InputField.vue";
import CustomButton from "@/components/ui/CustomButton.vue";

const emailRef = ref(null);

onMounted(() => {
  emailRef.value.$el.focus();
});

function requestPasswordReset() {
  console.log("password reset requested");
}
</script>

<template>
  <GuestLayout title="Forgot password">
    <form @submit.prevent="requestPasswordReset" class="space-y-6" method="POST">
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
        <CustomButton type="submit" class="w-full py-2">Send Link</CustomButton>
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
