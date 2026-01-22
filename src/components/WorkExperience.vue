<script setup lang="ts">
import { useAttrs } from 'vue'
import UserIcon from './icons/UserIcon.vue'
import CalendarIcon from './icons/CalendarIcon.vue'
import JobIcon from './icons/JobIcon.vue'
import ResumeCard from './ResumeCard.vue'

const attrs = useAttrs()
const props = defineProps<{
  company: string
  jobTitle: string
  period: string
  description: string
}>()
</script>

<template>
  <ResumeCard v-bind="attrs" :title="props.company">
    <div class="relative">
      <ul class="flex items-center gap-8">
        <li class="flex items-center gap-2">
          <span class="flex-none text-indigo-600">
            <UserIcon :size="16" />
          </span>
          <span class="flex-auto">{{ props.jobTitle }}</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="flex-none text-indigo-600">
            <CalendarIcon :size="16" />
          </span>
          <span class="flex-auto">{{ props.period }}</span>
        </li>
      </ul>
      <p class="mt-4">{{ props.description }}</p>
      <span
        class="absolute -top-6 -left-12 size-8 rounded-full border border-indigo-600 bg-white p-2 text-indigo-600"
      >
        <JobIcon :size="16" />
      </span>
    </div>
  </ResumeCard>
</template>
