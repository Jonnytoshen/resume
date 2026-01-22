<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="rounded-2xl border border-slate-200 p-4">
    <div class="mb-4 flex items-center justify-between gap-4" v-if="props.title || $slots.extra">
      <div class="flex-auto" v-if="props.title">
        <h3 class="font-bold text-gray-800">{{ props.title }}</h3>
      </div>
      <div class="flex-none" v-if="$slots.extra">
        <slot name="extra" />
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
