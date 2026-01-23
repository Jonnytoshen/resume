<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <div v-bind="attrs" class="absolute inset-0 z-0">
    <div
      class="blur-4xl absolute top-0 left-0 aspect-square w-6/10 -translate-y-1/2 transform rounded-full bg-indigo-600/15"
    ></div>
    <div
      class="absolute bottom-0 left-1/2 aspect-2/1 w-8/10 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-indigo-600/10 blur-3xl"
    ></div>
  </div>
</template>
