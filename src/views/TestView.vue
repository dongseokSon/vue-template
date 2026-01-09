<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <main>
    <input v-model="text" placeholder="입력하세요" />
    <p>{{ text }}</p>
  </main>
</template>

<style lang="scss" scoped>
main {
  input {
    border: 1px solid #ccc;

    &:focus {
      border-color: blue;
    }
  }

  p {
    color: white;
  }
}
</style>