<script setup lang="ts">
const props = withDefaults(defineProps<{ size?: number }>(), { size: 24 })
</script>

<template>
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
      d="M167.008 301.984h689.984a75.01546667 75.01546667 0 0 1 75.01546667 75.01546667v509.98506666a75.01546667 75.01546667 0 0 1-75.01546667 75.01546667H167.008a75.01546667 75.01546667 0 0 1-75.01546667-75.01546667v-509.984a75.01546667 75.01546667 0 0 1 75.01546667-75.01546666z m44.99946667-120.01386667h599.98506666v60.02986667H212.00746667z m59.98506666-119.97013333h480.01493334v59.98506667H271.99253333z"
    ></path>
  </svg>
</template>
