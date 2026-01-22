<script setup lang="ts">
import CapabilityCard from '@/components/CapabilityCard.vue'
import WandSparklesIcon from '@/components/icons/WandSparklesIcon.vue'
import WorksIcon from '@/components/icons/WorksIcon.vue'
import ResumeContacts from '@/components/ResumeContacts.vue'
import ResumeHeader from '@/components/ResumeHeader.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import WorkExperience from '@/components/WorkExperience.vue'

import { basicInfo, capabilities, workExperiences } from '@/config'
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
    <section>
      <SectionTitle class="mb-6">
        <template v-slot:icon>
          <WandSparklesIcon :size="20" />
        </template>
        能力与优势
      </SectionTitle>
      <div class="grid grid-cols-1 gap-4">
        <CapabilityCard
          v-for="capability in capabilities"
          :key="capability.field"
          :title="capability.field"
          :items="capability.items"
        />
      </div>
    </section>
    <section>
      <SectionTitle class="mb-6">
        <template v-slot:icon>
          <WorksIcon :size="20" />
        </template>
        工作经历
      </SectionTitle>
      <div class="grid grid-cols-1 gap-4 pl-4">
        <WorkExperience
          class="pl-8"
          v-for="item in workExperiences"
          :key="item.company"
          :company="item.company"
          :description="item.description"
          :job-title="item.job"
          :period="item.period"
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
