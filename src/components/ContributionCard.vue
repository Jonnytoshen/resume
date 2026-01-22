<script setup lang="ts">
import { useAttrs } from 'vue'
import ResumeCard from './ResumeCard.vue'
import LinkIcon from './icons/LinkIcon.vue'
import GitHubIcon from './icons/GitHubIcon.vue'

interface Props {
  name: string
  description: string
  url?: string
  github?: string
}
const attrs = useAttrs()
const props = defineProps<Props>()
</script>

<template>
  <ResumeCard v-bind="attrs" :title="props.name">
    <div class="space-y-4">
      <p>{{ props.description }}</p>
      <div class="flex items-center gap-10">
        <div v-if="props.url" class="inline-flex items-center gap-2">
          <LinkIcon :size="16" class="text-indigo-400" />
          <a :href="props.url" target="_blank" class="hover:text-indigo-600 hover:underline">{{
            props.url
          }}</a>
        </div>
        <div v-if="props.github" class="inline-flex items-center gap-2">
          <GitHubIcon :size="16" class="text-indigo-400" />
          <a :href="props.github" target="_blank" class="hover:text-indigo-600 hover:underline">{{
            props.github
          }}</a>
        </div>
      </div>
    </div>
  </ResumeCard>
</template>
