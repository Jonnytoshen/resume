<script setup lang="ts">
import { useAttrs } from 'vue'
import ResumeCard from './ResumeCard.vue'
import LinkIcon from './icons/LinkIcon.vue'
import TechnologyStackIcon from './icons/TechnologyStackIcon.vue'
import TaskIcon from './icons/TaskIcon.vue'
import SparklesIcon from './icons/SparklesIcon.vue'

interface Props {
  name: string
  role: string
  period: string
  description: string
  link?: string
  techStack?: string[]
  responsibilities?: string[]
  highlights?: string[]
}

const attrs = useAttrs()
const props = defineProps<Props>()
</script>

<template>
  <ResumeCard v-bind="attrs" :title="props.name">
    <template v-slot:extra>
      <div class="rounded-4xl border border-indigo-200 bg-indigo-50 px-3 py-1">
        <span>{{ props.role }}</span>
        <span class="px-2">|</span>
        <span>{{ props.period }}</span>
      </div>
    </template>
    <div class="space-y-4">
      <div>{{ props.description }}</div>
      <div v-if="props.link">
        <div class="mb-3 flex items-center gap-2 font-medium">
          <LinkIcon :size="16" class="text-indigo-400" />
          <span>项目链接：</span>
        </div>
        <div class="pl-6">
          <a :href="props.link" target="_blank" class="text-indigo-600 hover:underline">{{
            props.link
          }}</a>
        </div>
      </div>
      <div v-if="props.techStack && props.techStack.length > 0">
        <div class="mb-3 flex items-center gap-2 font-medium">
          <TechnologyStackIcon :size="16" class="text-indigo-400" />
          <span>技术栈：</span>
        </div>
        <div class="inline-flex flex-wrap items-center pl-6">
          <template v-for="(item, index) in props.techStack" :key="item">
            <span>{{ item }}</span>
            <span class="px-2" v-if="index + 1 < props.techStack.length">|</span>
          </template>
        </div>
      </div>
      <div v-if="props.responsibilities && props.responsibilities.length > 0">
        <div class="mb-3 flex items-center gap-2 font-medium">
          <TaskIcon :size="16" class="text-indigo-400" />
          <span>核心职责与产出：</span>
        </div>
        <ul class="list-disc space-y-2 pl-6">
          <li v-for="item in props.responsibilities" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div v-if="props.highlights && props.highlights.length > 0">
        <div class="mb-3 flex items-center gap-2 font-medium">
          <SparklesIcon :size="16" class="text-indigo-400" />
          <span>项目成果与价值：</span>
        </div>
        <ul class="list-disc space-y-2 pl-6">
          <li v-for="item in props.highlights" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </ResumeCard>
</template>
