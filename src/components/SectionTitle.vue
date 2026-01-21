<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <div v-bind="attrs" class="flex items-center gap-4">
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
