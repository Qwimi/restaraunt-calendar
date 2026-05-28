<script setup lang="ts">
type BadgeTypes = 'neutral' | 'success' | 'primary' | 'primary-reserve'
export interface BadgeProps {
  type: BadgeTypes
  label: string
}

const props = defineProps<BadgeProps>()
</script>

<template>
  <span :class="`badge badge--${props.type}`">{{ props.label }}</span>
</template>

<style scoped lang="scss">
.badge {
  padding: 2px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: var(--size-font-extrasmall);
  line-height: var(--size-line-height-reset);
  font-weight: 600;

  &--neutral {
    color: var(--color-badge-neutral-color);
    background-color: var(--color-badge-neutral-bg);
  }

  &--success {
    color: var(--color-badge-success-color);
    background-color: var(--color-badge-success-bg);
  }

  &--primary {
    color: var(--color-badge-primary-text);
    background-color: var(--color-badge-primary-bg);
  }

  &--primary-reserve {
    color: var(--color-badge-primary-reserve-color);
    background-color: var(--color-badge-primary-reserve-bg);
  }
}
</style>
