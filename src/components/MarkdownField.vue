<script setup lang="ts">
import { ref, useAttrs, watch } from 'vue'
import { marked } from 'marked'

const attrs = useAttrs()
const { source } = defineProps<{
  source: string
}>()
const innerHTML = ref('')

watch(
  () => source,
  async (newSource) => {
    const html = await marked.parse(newSource)
    innerHTML.value = html
  },
  { immediate: true },
)
</script>

<template>
  <p v-bind="attrs" v-html="innerHTML"></p>
</template>
