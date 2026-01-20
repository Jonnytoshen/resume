<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import { ref, useAttrs } from 'vue'

interface EmailMotionIconProps {
  size?: number
  strokeWidth?: number
}

const props = withDefaults(defineProps<EmailMotionIconProps>(), { size: 24, strokeWidth: 2 })
const attrs = useAttrs()
const isControlled = ref(false)

const PATH_VARIANTS = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
  },
}

const pathControls = useAnimationControls()

const playAnimation = () => {
  pathControls.start('animate')
}

const stopAnimation = () => {
  pathControls.start('normal')
}

const handleMouseEnter = async (e: MouseEvent) => {
  if (isControlled.value) {
    ;(attrs.onMouseenter as ((e: MouseEvent) => void) | undefined)?.(e)
    return
  }
  playAnimation()
}

const handleMouseLeave = (e: MouseEvent) => {
  if (isControlled.value) {
    ;(attrs.onMouseleave as ((e: MouseEvent) => void) | undefined)?.(e)
    return
  }
  stopAnimation()
}

defineExpose({
  startAnimation: async () => {
    isControlled.value = true
    playAnimation()
  },
  stopAnimation: () => {
    isControlled.value = true
    stopAnimation()
  },
})
</script>

<template>
  <div v-bind="attrs" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <svg
      fill="none"
      :height="props.size"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
      viewBox="0 0 24 24"
      :width="props.size"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        :animate="pathControls"
        d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
        initial="normal"
        :variants="PATH_VARIANTS"
      />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  </div>
</template>
