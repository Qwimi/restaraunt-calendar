<script setup lang="ts">
const props = defineProps<{ restaurant_name?: string }>()
</script>

<template>
  <header class="header container">
    <div class="header__logo">AIRESTO | {{ props.restaurant_name }}</div>
  </header>
</template>

<style lang="scss">
.header {
  background-color: var(--color-header-bg);
  padding-block: 10px;

  &__logo {
    font-weight: 600;
    font-size: var(--size-font-small);
    line-height: var(--size-line-height-small);
  }
}
</style>
