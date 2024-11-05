<script setup>
import { onMounted, ref } from "vue";
import GuestLayout from "@/components/GuestLayout.vue";
import InputField from "@/components/ui/InputField.vue";
import CustomButton from "@/components/ui/CustomButton.vue";

const newPasswordRef = ref(null);

onMounted(() => {
  newPasswordRef.value.$el.focus();
});

const resetPassword = () => {
  console.log("password has been successfully reset");
};
</script>

<template>
  <GuestLayout title="Reset your password">
    <form @submit.prevent="resetPassword" class="space-y-6" method="POST">
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
        <label for="confirm_password" class="block text-sm/6 font-medium text-dark"
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
        <CustomButton type="submit" class="w-full py-2">Reset Password</CustomButton>
      </div>
    </form>
  </GuestLayout>
</template>

<style lang="scss" scoped></style>
