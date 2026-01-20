<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import { ref, useAttrs } from 'vue'

interface PhoneMotionIconProps {
  size?: number
  strokeWidth?: number
}

const props = withDefaults(defineProps<PhoneMotionIconProps>(), { size: 24, strokeWidth: 2 })
const attrs = useAttrs()
const isControlled = ref(false)

const BODY_VARIANTS = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.4,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  },
}

const controls = useAnimationControls()
const playAnimation = () => {
  controls.start('animate')
}
const stopAnimation = () => {
  controls.start('normal')
}

const handleMouseEnter = (e: MouseEvent) => {
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
  startAnimation: () => {
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
  <span v-bind="attrs" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
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
        :animate="controls"
        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        initial="normal"
        :variants="BODY_VARIANTS"
      />
    </svg>
  </span>
</template>
