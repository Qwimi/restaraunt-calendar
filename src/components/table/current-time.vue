<script setup lang="ts">
const props = defineProps<{ y: number; width: number }>()
</script>

<template>
  <div class="current-time" :style="{ '--y': `${props.y}px`, '--w': `${props.width}px` }"></div>
</template>

<style scoped lang="scss">
.current-time {
  background-color: var(--color-table-current-time);
  height: 1px;
  position: absolute;
  top: var(--y);
  left: 0;
  right: 0;
  width: var(--w);
  z-index: 100;
}
</style>
