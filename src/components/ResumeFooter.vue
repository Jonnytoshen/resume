<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <footer v-bind="attrs" class="text-center text-xl font-bold text-indigo-600">
    感谢您翻阅至此，期待在代码与现实之间，与您相遇。
  </footer>
</template>
