<script setup lang="ts">
import ResumeContacts from '@/components/ResumeContacts.vue'
import ResumeHeader from '@/components/ResumeHeader.vue'

import { basicInfo } from '@/config'
</script>

<template>
  <div class="grid grid-cols-1 gap-10.5 p-10.5">
    <ResumeHeader>
      <h1 class="text-[42px] font-bold text-gray-800">{{ basicInfo.name }}</h1>
      <div class="mt-3">
        {{ basicInfo.gender }} | {{ basicInfo.birth }} | {{ basicInfo.city }} |
        {{ basicInfo.experience }}年工作经验 | {{ basicInfo.job }}
      </div>
      <ResumeContacts
        class="mt-6"
        :phone="basicInfo.contacts.phone"
        :email="basicInfo.contacts.email"
        :github="basicInfo.contacts.github"
      />
    </ResumeHeader>
  </div>
</template>

<style scoped></style>
