<script setup lang="ts">
import ResumeAvatar from './ResumeAvatar.vue'
</script>

<template>
  <header class="flex flex-col items-center gap-8 py-8 lg:flex-row lg:gap-12">
    <div class="flex-none -translate-x-4 transform lg:order-1">
      <ResumeAvatar />
    </div>
    <div class="w-full flex-auto text-center lg:text-left">
      <slot />
    </div>
  </header>
</template>

<style scoped></style>
