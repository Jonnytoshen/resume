<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <div v-bind="attrs" class="flex items-center justify-center gap-4 lg:justify-start print:justify-start">
    <div
      class="flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"
      v-if="$slots.icon"
    >
      <slot name="icon" />
    </div>
    <h2 class="text-lg font-bold text-gray-800">
      <slot />
    </h2>
  </div>
</template>
