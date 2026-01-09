<script setup lang="ts">
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
  <button @click="toggle" class="dark-mode-toggler">
    {{ isDark ? 'Light' : 'Dark' }}
  </button>
</template>

<style lang="scss" scoped>
.dark-mode-toggler {
  padding: $spacing-2 $spacing-4;
  border: 1px solid var(--color-border-default);
  border-radius: $radius-md;
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  cursor: pointer;

  &:hover {
    background: var(--color-bg-tertiary);
  }
}
</style>
