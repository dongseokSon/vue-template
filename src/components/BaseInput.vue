<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input :value="modelValue" @input="onInput" :placeholder="placeholder" />
</template>

<style lang="scss" scoped>
input {
  @include typo($text-16R);
  padding: 0.5rem;
  border-radius: $radius-sm;
  border: none;
  gap: $spacing-1;

  &:focus {
    outline: 2px solid skyblue;
  }
}
</style>
