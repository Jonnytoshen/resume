<script setup lang="ts">
import ResumeCard from './ResumeCard.vue'
import EmailMotionIcon from './motion-icons/EmailMotionIcon.vue';
import GitHubMotionIcon from './motion-icons/GitHubMotionIcon.vue';
import PhoneMotionIcon from './motion-icons/PhoneMotionIcon.vue';

const props = defineProps<{
  phone?: string
  email?: string;
  github?: string;
}>();
</script>

<template>
  <ResumeCard>
    <div class="grid grid-cols-2 gap-4">
      <div v-if="props.phone" class="flex gap-3 items-center">
        <PhoneMotionIcon :size="16" />
        <span>{{ props.phone }}</span>
      </div>
      <div v-if="props.email" class="flex gap-3 items-center">
        <EmailMotionIcon :size="16" />
        <span>{{ props.email }}</span>
      </div>
      <div v-if="props.github" class="flex gap-3 items-center">
        <GitHubMotionIcon :size="16" />
        <span>{{ props.github }}</span>
      </div>
    </div>
  </ResumeCard>
</template>
