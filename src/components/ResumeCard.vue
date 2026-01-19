<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="p-4 border border-slate-200 rounded-2xl">
    <div class="mb-4" v-if="props.title">
      <h3 class="font-bold text-gray-800">{{ props.title }}</h3>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
