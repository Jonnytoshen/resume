<script setup lang="ts">
import { motion, useAnimationControls, type VariantType } from 'motion-v'
import { ref, useAttrs } from 'vue'

interface GitHubMotionIconProps {
  size?: number
  strokeWidth?: number
}

const props = withDefaults(defineProps<GitHubMotionIconProps>(), { size: 24, strokeWidth: 2 })
const attrs = useAttrs()
const isControlled = ref(false)

const BODY_VARIANTS = {
  normal: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    scale: [0.9, 1],
    transition: {
      duration: 0.4,
    },
  },
}

const TAIL_VARIANTS: { [key: string]: VariantType } = {
  normal: {
    pathLength: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
  draw: {
    pathLength: [0, 1],
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
  wag: {
    pathLength: 1,
    rotate: [0, -15, 15, -10, 10, -5, 5],
    transition: {
      duration: 2.5,
      ease: 'easeInOut',
      repeat: Number.POSITIVE_INFINITY,
    },
  },
}

const bodyControls = useAnimationControls()
const tailControls = useAnimationControls()

const playAnimation = async () => {
  bodyControls.start('animate')
  await tailControls.start('draw')
  tailControls.start('wag')
}
const stopAnimation = () => {
  bodyControls.start('normal')
  tailControls.start('normal')
}

const handleMouseEnter = async (e: MouseEvent) => {
  if (isControlled.value) {
    const handler = attrs.onMouseenter as ((e: MouseEvent) => void) | undefined
    handler?.(e)
    return
  }
  await playAnimation()
}
const handleMouseLeave = (e: MouseEvent) => {
  if (isControlled.value) {
    const handler = attrs.onMouseleave as ((e: MouseEvent) => void) | undefined
    handler?.(e)
    return
  }
  stopAnimation()
}

defineExpose({
  startAnimation: async () => {
    isControlled.value = true
    await playAnimation()
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
        :animate="bodyControls"
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
        initial="normal"
        :variants="BODY_VARIANTS"
      />
      <motion.path
        :animate="tailControls"
        d="M9 18c-4.51 2-5-2-7-2"
        initial="normal"
        :variants="TAIL_VARIANTS"
      />
    </svg>
  </div>
</template>
