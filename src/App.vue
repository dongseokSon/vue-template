<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './AppHeader.vue'
import CommonButton from './components/CommonButton.vue'
</script>

<template>
  <AppHeader />

  <main class="button-showcase">
    <CommonButton variant="blue" class="blue-button">Blue</CommonButton>
    <CommonButton variant="blue" :loading="true">Blue Loading</CommonButton>
    <CommonButton variant="green">Green</CommonButton>
    <CommonButton variant="white">White</CommonButton>
    <CommonButton variant="gray">Gray</CommonButton>
    <CommonButton variant="transparent">Transparent</CommonButton>
  </main>

  <RouterView />
</template>

<style lang="scss" scoped>
.button-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
}
</style>
