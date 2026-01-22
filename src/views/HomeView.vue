<script setup lang="ts">
import CapabilityCard from '@/components/CapabilityCard.vue'
import ContributionCard from '@/components/ContributionCard.vue'
import ContributionIcon from '@/components/icons/ContributionIcon.vue'
import EducationIcon from '@/components/icons/EducationIcon.vue'
import EvaluationIcon from '@/components/icons/EvaluationIcon.vue'
import ProjectsIcon from '@/components/icons/ProjectsIcon.vue'
import WandSparklesIcon from '@/components/icons/WandSparklesIcon.vue'
import WorksIcon from '@/components/icons/WorksIcon.vue'
import MarkdownField from '@/components/MarkdownField.vue'
import ProjectExperience from '@/components/ProjectExperience.vue'
import ResumeCard from '@/components/ResumeCard.vue'
import ResumeContacts from '@/components/ResumeContacts.vue'
import ResumeHeader from '@/components/ResumeHeader.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import WorkExperience from '@/components/WorkExperience.vue'

import {
  basicInfo,
  capabilities,
  contributions,
  educations,
  personalEvaluation,
  projects,
  workExperiences,
} from '@/config'
</script>

<template>
  <div class="space-y-10.5 p-10.5">
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
    <section>
      <SectionTitle class="mb-6">
        <template v-slot:icon>
          <ProjectsIcon :size="20" />
        </template>
        项目经验
      </SectionTitle>
      <div class="grid grid-cols-1 gap-4">
        <ProjectExperience
          v-for="project in projects"
          :key="project.id"
          :name="project.name"
          :role="project.role"
          :period="project.period"
          :description="project.description"
          :link="project.link"
          :tech-stack="project.techStack"
          :responsibilities="project.responsibilities"
          :highlights="project.highlights"
        />
      </div>
    </section>
    <section>
      <SectionTitle class="mb-6">
        <template v-slot:icon>
          <EvaluationIcon :size="20" />
        </template>
        个人评价
      </SectionTitle>
      <ResumeCard>
        <ul class="list-disc space-y-2 pl-6">
          <li v-for="(item, index) in personalEvaluation" :key="index">
            <MarkdownField :source="item" />
          </li>
        </ul>
      </ResumeCard>
    </section>
    <section>
      <SectionTitle class="mb-6">
        <template v-slot:icon>
          <ContributionIcon :size="20" />
        </template>
        开源贡献
      </SectionTitle>
      <div class="space-y-4">
        <ContributionCard
          v-for="contribution in contributions"
          :key="contribution.name"
          :name="contribution.name"
          :description="contribution.description"
          :url="contribution.url"
          :github="contribution.github"
        />
      </div>
    </section>
    <section>
      <SectionTitle class="mb-6">
        <template v-slot:icon>
          <EducationIcon :size="20" />
        </template>
        教育背景
      </SectionTitle>
      <ResumeCard>
        <ul class="list-disc space-y-2 pl-6">
          <li v-for="(item, index) in educations" :key="index" class="space-x-2">
            <span>{{ item.school }}</span>
            <span>|</span>
            <span>{{ item.degree }}</span>
            <span>|</span>
            <span>{{ item.major }}</span>
            <span>|</span>
            <span>{{ item.period }}</span>
          </li>
        </ul>
      </ResumeCard>
    </section>
  </div>
</template>
