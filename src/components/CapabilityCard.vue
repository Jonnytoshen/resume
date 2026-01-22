<script setup lang="ts">
import { useAttrs } from 'vue'
import ResumeCard from './ResumeCard.vue'
import CheckIcon from './icons/CheckIcon.vue'
import MarkdownField from './MarkdownField.vue'

const attrs = useAttrs()
const props = defineProps<{
  title: string
  items: string[]
}>()
</script>

<template>
  <ResumeCard v-bind="attrs" :title="props.title">
    <ul class="space-y-2">
      <li v-for="item in props.items" :key="item" class="flex items-start gap-2">
        <span class="flex-none py-1 text-indigo-600">
          <CheckIcon :size="16" />
        </span>
        <MarkdownField :source="item" />
      </li>
    </ul>
  </ResumeCard>
</template>
