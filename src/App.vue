<script setup lang="ts">
import BackgroundDecor from './components/BackgroundDecor.vue'
</script>

<template>
  <main
    class="lg:rounded-6xl lg:shadow-root relative mx-auto max-w-5xl overflow-hidden bg-white lg:my-16"
  >
    <BackgroundDecor />
    <div class="relative z-10">
      <RouterView />
    </div>
  </main>
</template>
