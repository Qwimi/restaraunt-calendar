<script setup lang="ts">
import type { PositionedEvent, Table } from '@/types'
import { type CSSProperties, onMounted, ref } from 'vue'

const props = defineProps<{
  event: PositionedEvent
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
  <div
    class="event-wrapper"
    :style="{
      ...position,
      '--level': props.event.level,
      '--column-index': props.event.column,
      '--column-count': props.event.columnsCount,
    }"
  >
    <div
      class="event"
      :class="[{ 'event--disabled': props.isDragging }, `event--${props.event.type}`]"
    >
      <div class="event__content">
        <p>{{props.event.type}} {{ props.event.id }}</p>
        <p>{{ props.event.start_time }} - {{ props.event.end_time }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.event-wrapper {
  padding-left: calc(4px * var(--level, 0));
  display: grid;
  grid-template-columns: repeat(var(--column-count, 1), 1fr);
  pointer-events: none;
  z-index: calc(var(--level, 0) + 1);
}

.event {
  display: flex;
  gap: 4px;
  border-radius: 4px;
  overflow: hidden;
  background-color: color-mix(in srgb, var(--color-accent) 16%, transparent);
  height: 100%;
  grid-column: calc(var(--column-index, 0) + 1);
  pointer-events: auto;

  &:before {
    content: '';
    display: block;
    flex-shrink: 0;
    width: 2px;
    background-color: var(--color-accent);
  }

  &__content {
    padding: 2px;
  }

  &--disabled {
    pointer-events: none;
  }

  &--order {
    --color-accent: var(--color-order-accent);
  }

  &--banquet {
    --color-accent: var(--color-banquet-accent);
  }

  &--waiting-guests {
    --color-accent: var(--color-waiting-guests-accent);
  }

  &--reservation {
    --color-accent: var(--color-reservation-accent);
  }
}
</style>
