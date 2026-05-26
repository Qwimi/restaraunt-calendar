<script setup lang="ts">
import type { Table, TableEvent } from '@/types'
import { type CSSProperties, onMounted, ref } from 'vue'

const props = defineProps<{
  event: TableEvent
  isDragging: boolean
  positionStyleFunc: (
    startTime: string,
    endTime: string,
    tableStart: Table['id'],
    tableEnd: Table['id'],
  ) => CSSProperties
}>()

const position = ref<CSSProperties>({ display: 'none' })

onMounted(() => {
  position.value = props.positionStyleFunc(
    props.event.start_time,
    props.event.end_time,
    props.event.tableId,
    props.event.tableId,
  )
})
</script>

<template>
  <div class="event" :class="{ 'event--disabled': props.isDragging }" :style="position">
    <div class="event__content">{{ props.event.start_time }} - {{ props.event.end_time }}</div>
  </div>
</template>

<style scoped lang="scss">
.event {
  display: flex;
  gap: 4px;
  border-radius: 4px;
  overflow: hidden;
  background-color: color-mix(in srgb, var(--color-order-accent) 16%, transparent);

  &:before {
    content: '';
    display: block;
    flex-shrink: 0;
    width: 4px;
    background-color: var(--color-order-accent);
  }

  &__content {
    padding: 2px;
  }

  &--disabled {
    pointer-events: none;
  }
}
</style>
