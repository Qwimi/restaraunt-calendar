<script setup lang="ts">
import type { Order, PositionedEvent, Reservation, Table } from '@/types'
import { computed, type CSSProperties, nextTick, onMounted, ref } from 'vue'
import OrderContent from '@/components/table/order-content.vue'
import ReservationContent from '@/components/table/reservation-content.vue'

const props = defineProps<{
  event: PositionedEvent
  disabled: boolean
  positionStyleFunc: (
    startTime: string,
    endTime: string,
    tableStart: Table['id'],
    tableEnd: Table['id'],
  ) => CSSProperties
}>()

const position = ref<CSSProperties>({ display: 'none' })

const contentRef = ref<HTMLElement | null>(null)
const isOverflowing = ref(false)

const checkOverflow = () => {
  const el = contentRef.value

  if (!el) return

  isOverflowing.value = el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight
}

onMounted(async () => {
  position.value = props.positionStyleFunc(
    props.event.start_time,
    props.event.end_time,
    props.event.tableId,
    props.event.tableId,
  )

  await nextTick()

  checkOverflow()
})

const isEventOrder = computed(() => props.event.type === 'order' || props.event.type === 'banquet')

const content = computed(() => {
  if (isEventOrder.value) {
    return {
      component: OrderContent,
      props: { order: props.event as PositionedEvent<Order> },
    }
  }

  return {
    component: ReservationContent,
    props: { reservation: props.event as PositionedEvent<Reservation> },
  }
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
      :class="[
        {
          'event--disabled': props.disabled,
          'event--overflow': isOverflowing,
        },
        `event--${props.event.type}`,
      ]"
    >
      <div ref="contentRef" class="event__content">
        <component :is="content.component" v-bind="content.props" />
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
  position: relative;
  z-index: calc(var(--level, 0) + 1);

  &:before {
    content: '';
    display: block;
    flex-shrink: 0;
    width: 2px;
    background-color: var(--color-accent);
  }

  &__content {
    padding: 2px;
    height: 100%;
    flex: 1;
    overflow: hidden;

    div {
      cursor: pointer;
    }
  }

  &:has(.event__content > div:hover) {
    z-index: 1000;
    backdrop-filter: blur(4px);
  }

  &--overflow:has(.event__content > div:hover) {
    justify-self: start;
    min-height: fit-content;
  }

  &--overflow:has(.event__content > div:hover) .event__content {
    min-width: fit-content;
    min-height: fit-content;
    overflow: visible;
  }

  &--disabled {
    pointer-events: none;
    opacity: 0.3;
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
