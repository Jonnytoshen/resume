<script setup lang="ts">
import EmailIcon from './icons/EmailIcon.vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import PhoneIcon from './icons/PhoneIcon.vue'
import ResumeCard from './ResumeCard.vue'

const props = defineProps<{
  phone?: string
  email?: string
  github?: string
}>()
</script>

<template>
  <ResumeCard>
    <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <div v-if="props.phone" class="flex items-center gap-3">
        <span class="flex-none">
          <PhoneIcon :size="16" />
        </span>
        <span>{{ props.phone }}</span>
      </div>
      <div v-if="props.email" class="flex items-center gap-3">
        <span class="flex-none">
          <EmailIcon :size="16" />
        </span>
        <span>{{ props.email }}</span>
      </div>
      <div v-if="props.github" class="flex items-center gap-3">
        <span class="flex-none">
          <GitHubIcon :size="16" />
        </span>
        <span>{{ props.github }}</span>
      </div>
    </div>
  </ResumeCard>
</template>
