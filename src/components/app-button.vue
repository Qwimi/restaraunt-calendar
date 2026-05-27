<script setup lang="ts">
const props = defineProps<{ variant: 'neutral' | 'primary' }>()
</script>

<template>
  <button class="btn" :class="`btn--${props.variant}`">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: 4px 6px;
  border-radius: 4px;
  font-size: var(--size-font-small);
  line-height: var(--size-line-height-medium);
  text-align: center;

  &--neutral {
    color: var(--color-btn-neutral-text);
    background-color: var(--color-btn-neutral-bg);
  }

  &--primary {
    color: var(--color-btn-primary-text);
    background-color: var(--color-btn-primary-bg);
  }
}
</style>
