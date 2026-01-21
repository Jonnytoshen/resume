<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="rounded-2xl border border-slate-200 p-4">
    <div class="mb-4" v-if="props.title">
      <h3 class="font-bold text-gray-800">{{ props.title }}</h3>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
