<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '@/components/BaseInput.vue'

const text = ref('')
</script>

<template>
  <main>
    <BaseInput v-model="text" placeholder="입력하세요" />
    <p>{{ text }}</p>

    <div>에이</div>
  </main>
</template>

<style lang="scss" scoped>
main {
  p {
    color: white;
  }
}
</style>