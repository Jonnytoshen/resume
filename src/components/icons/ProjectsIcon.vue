<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()
const props = withDefaults(defineProps<{ size?: number }>(), { size: 24 })
</script>

<template>
  <span v-bind="attrs">
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      fill="currentColor"
      aria-hidden="true"
      :width="props.size"
      :height="props.size"
    >
      <path
        d="M842 137H543.8c-13.8 0-27.6-3-39.6-9.6L380.6 65.6A175.8 175.8 0 0 0 300.8 46.4H182.6A136.2 136.2 0 0 0 47 182v660c0 74.4 60.6 135 135 135h660c74.4 0 135-60.6 135-135V272c0-74.4-60.6-135-135-135z m-538.2 586.8a45 45 0 1 1-63.6-63.54 45 45 0 0 1 63.6 63.54z m0-240c-4.2 4.2-9 7.8-14.4 9.6a43.02 43.02 0 0 1-34.8 0 45 45 0 1 1 49.2-9.6zM752 737H452c-24.6 0-45-20.4-45-45s20.4-45 45-45h300c24.6 0 45 20.4 45 45s-20.4 45-45 45z m0-240H452c-24.6 0-45-20.4-45-45s20.4-45 45-45h300c24.6 0 45 20.4 45 45s-20.4 45-45 45z"
      ></path>
    </svg>
  </span>
</template>
