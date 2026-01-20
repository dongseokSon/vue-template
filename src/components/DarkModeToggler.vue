<script setup lang="ts">
import CommonButton from './CommonButton.vue'

const isDark = ref(document.documentElement.dataset.theme === 'dark')

function toggle() {
  isDark.value = !isDark.value
  document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
}

onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const saved = document.documentElement.dataset.theme
  isDark.value = saved ? saved === 'dark' : prefersDark
})
</script>

<template>
  <CommonButton variant="white" @click="toggle">
    {{ isDark ? 'Light' : 'Dark' }}
  </CommonButton>
</template>
