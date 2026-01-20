<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'white' | 'gray' | 'blue' | 'green' | 'error' | 'transparent'
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'blue',
  loading: false,
  disabled: false,
})

const isDisabled = computed(() => props.disabled || props.loading)
</script>

<template>
  <button
    class="common-button"
    :class="[`common-button--${variant}`, { 'is-loading': loading }]"
    :disabled="isDisabled"
  >
    <span v-if="loading" class="spinner"></span>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.common-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-2;
  border: 1px solid transparent; // Default transparent border
  border-radius: $radius-md;
  cursor: pointer;
  @include typo('14M');
  @include transition;
  @include focus-ring;
  padding: $spacing-2 $spacing-4;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  &.is-loading {
    cursor: wait;
    pointer-events: auto;
  }

  // Variants
  &--blue {
    background-color: var(--color-button-blue);
    color: #ffffff; // Always white for blue/green buttons

    &:hover:not(:disabled) {
      background-color: var(--color-button-blue-hover);
    }

    &:active:not(:disabled) {
      background-color: var(--color-button-blue-active);
    }
  }

  &--green {
    background-color: var(--color-button-green);
    color: #ffffff;

    &:hover:not(:disabled) {
      background-color: var(--color-button-green-hover);
    }

    &:active:not(:disabled) {
      background-color: var(--color-button-green-active);
    }
  }

  &--white {
    background-color: var(--color-button-white);
    color: var(--color-text-primary);
    border-color: var(--color-border-default);

    &:hover:not(:disabled) {
      background-color: var(--color-button-white-hover);
    }

    &:active:not(:disabled) {
      background-color: var(--color-button-white-active);
    }
  }

  &--gray {
    background-color: var(--color-button-gray);
    color: var(--color-text-primary);

    &:hover:not(:disabled) {
      background-color: var(--color-button-gray-hover);
    }

    &:active:not(:disabled) {
      background-color: var(--color-button-gray-active);
    }
  }

  &--error {
    background-color: var(--color-error);
    color: #ffffff;

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }

    &:active:not(:disabled) {
      filter: brightness(0.8);
    }
  }

  &--transparent {
    background-color: transparent;
    color: var(--color-text-primary);

    &:hover:not(:disabled) {
      background-color: var(--color-button-transparent-hover);
    }

    &:active:not(:disabled) {
      background-color: var(--color-button-transparent-active);
    }
  }
}

.spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
