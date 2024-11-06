<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/store/auth";

import GuestLayout from "@/components/GuestLayout.vue";
import InputField from "@/components/ui/InputField.vue";
import CustomButton from "@/components/ui/CustomButton.vue";
import { useRouter } from "vue-router";
import LoadingSpinner from "@/components/icons/LoadingSpinner.vue";

const authStore = useAuthStore();
const router = useRouter();

const user = {
  email: "",
  password: "",
  remember: false,
};

const loginRef = ref(null);

onMounted(() => {
  loginRef.value.$el.focus();
});

const login = async () => {
  try {
    await authStore.login(user);
    router.push({ name: "app.dashboard" });
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>

<template>
  <GuestLayout title="Sign in to your account">
    <form @submit.prevent="login" class="space-y-6" method="POST">
      <div v-if="authStore.errorMsg" class="font-semibold text-danger">
        {{ authStore.errorMsg }}
      </div>

      <div>
        <label for="email" class="block text-sm/6 font-medium text-dark"
          >Email address</label
        >
        <div class="mt-2">
          <InputField
            v-model="user.email"
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
              class="p-1 font-semibold text-accent hover:text-accent/80 focus-visible:outline-accent"
              >Forgot password?
            </RouterLink>
          </div>
        </div>
        <div class="mt-2">
          <InputField
            v-model="user.password"
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
      </div>

      <div class="flex items-center gap-2">
        <input
          v-model="user.remember"
          id="remember"
          name="remember"
          type="checkbox"
          class="h-4 w-4 rounded border-accent text-accent focus:ring-accent"
          aria-labelledby="remember-label"
        />
        <label for="remember" class="block text-sm/6 font-medium text-dark"
          >Remember me</label
        >
      </div>

      <div>
        <CustomButton type="submit" :disabled="authStore.loading" class="w-full py-2">
          <LoadingSpinner
            v-if="authStore.loading"
            class="mr-2 h-5 w-5 animate-spin font-black text-white"
          />
          <div v-else>Sign in</div>
        </CustomButton>
      </div>
    </form>
  </GuestLayout>
</template>

<style lang="scss" scoped></style>
