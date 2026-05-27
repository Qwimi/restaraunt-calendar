<script setup lang="ts">
const props = defineProps<{
  value: string
  label?: string
  active?: boolean
}>()

const emit = defineEmits<{
  toggleCheckbox: [value: string, checked: boolean]
}>()

const toggle = () => {
  emit('toggleCheckbox', props.value, !props.active)
}
</script>

<template>
  <button
    role="checkbox"
    class="checkbox"
    :class="{
      'checkbox--active': props.active,
    }"
    @click="toggle"
  >
    <slot>
      {{ props.label || props.value }}
    </slot>
  </button>
</template>

<style scoped lang="scss">
.checkbox {
  display: inline-flex;
  background-color: var(--color-chechbox-bg);
  padding: 4px 6px;
  border-radius: 4px;

  font-size: var(--size-font-small);
  line-height: var(--size-line-height-medium);

  transition: background-color 0.3s;

  &--active {
    background-color: var(--color-chechbox-bg-active);
    color: var(--color-chechbox-text-active);
  }
}
</style>
