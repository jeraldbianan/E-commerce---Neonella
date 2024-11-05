<script setup>
import { onMounted, ref } from "vue";
import GuestLayout from "@/components/GuestLayout.vue";
import InputField from "@/components/ui/InputField.vue";
import CustomButton from "@/components/ui/CustomButton.vue";

const loginRef = ref(null);

onMounted(() => {
  loginRef.value.$el.focus();
});

const login = () => {
  console.log("login");
};
</script>

<template>
  <GuestLayout title="Sign in to your account">
    <form @submit.prevent="login" class="space-y-6" method="POST">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-dark"
          >Email address</label
        >
        <div class="mt-2">
          <InputField
            ref="loginRef"
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
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-dark"
            >Password</label
          >
          <div class="text-sm">
            <RouterLink
              :to="{ name: 'requestPasswordReset' }"
              class="font-semibold text-accent hover:text-accent/80 focus-visible:outline-accent"
              >Forgot password?
            </RouterLink>
          </div>
        </div>
        <div class="mt-2">
          <InputField id="password" name="password" type="password" required />
        </div>
      </div>

      <div>
        <CustomButton type="submit" class="w-full py-2">Sign in</CustomButton>
      </div>
    </form>
  </GuestLayout>
</template>

<style lang="scss" scoped></style>
