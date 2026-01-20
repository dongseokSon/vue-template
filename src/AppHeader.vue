<script setup lang="ts">
import { RouterLink } from 'vue-router'
import DarkModeToggler from './components/DarkModeToggler.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="AppRoutes.HOME.path">{{ AppRoutes.HOME.label }}</RouterLink>
        <RouterLink :to="AppRoutes.ABOUT.path">{{ AppRoutes.ABOUT.label }}</RouterLink>
        <RouterLink :to="AppRoutes.TEST.path">{{ AppRoutes.TEST.label }}</RouterLink>
      </nav>
      <DarkModeToggler />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border-default);
  padding: 1rem 2rem;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  display: flex;
  gap: 0.5rem;

  a {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      background-color: var(--color-bg-tertiary);
      color: var(--color-text-primary);
    }

    &.router-link-exact-active {
      color: var(--color-brand-primary);
      font-weight: 600;
    }
  }
}
</style>
