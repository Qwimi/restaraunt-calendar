<script setup lang="ts">
import { computed } from 'vue'
import { type Table, TIMESTEP } from '@/types'
import { addMinutesToDate, formatDateToString, parseStringToDate } from '@/composables'

const props = defineProps<{
  time: string
  tableId: Table['id']
  zone: Table['zone']
}>()

const addMinutes = (timeStr: string, minsToAdd: number): string =>
  formatDateToString(addMinutesToDate(parseStringToDate(timeStr), minsToAdd))

const subSlots = computed(() => [
  { start: props.time, end: addMinutes(props.time, TIMESTEP.HALF) },
  { start: addMinutes(props.time, TIMESTEP.HALF), end: addMinutes(props.time, TIMESTEP.FULL) },
])

const emit = defineEmits<{
  'start-select': [Table['id'], string, string, Table['zone']]
  select: [Table['id'], string, string, Table['zone']]
  'end-select': []
}>()
</script>

<template>
  <td class="timetable-cell">
    <div class="timetable-cell__container">
      <div
        v-for="slot in subSlots"
        :key="slot.start"
        :data-time-start="slot.start"
        :data-time-end="slot.end"
        :data-table-id="props.tableId"
        class="timetable-cell__sub-slot"
        @mousedown.prevent="emit('start-select', props.tableId, slot.start, slot.end, props.zone)"
        @mouseenter="emit('select', props.tableId, slot.start, slot.end, props.zone)"
        @mouseup="emit('end-select')"
      >
        {{ slot.start }}
      </div>
    </div>
  </td>
</template>

<style scoped lang="scss">
$border-style: 1px solid var(--color-table-border);

.timetable-cell {
  height: var(--size-cell-height);
  width: var(--size-cell-width);
  min-width: var(--size-cell-width);
  border-top: $border-style;
  border-right: $border-style;
  padding: 0;
  user-select: none;
  touch-action: none;
  cursor: default;

  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  &__sub-slot {
    flex: 1;
    padding: 4px;
    width: 100%;
    background: var(--color-table-cell-hover-bg);
    color: var(--color-table-time-text);
    opacity: 0;
    transition: opacity 0.3s;
    line-height: var(--size-line-height-reset);

    &:hover {
      opacity: 1;
    }
  }
}
</style>
