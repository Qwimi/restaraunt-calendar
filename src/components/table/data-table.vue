<script setup lang="ts">
import type { Table } from '@/types'
import HeaderCell from '@/components/table/header-cell.vue'
import TableCell from '@/components/table/table-cell.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { getMaxTimeStr, getMinTimeStr, getTimeDuration } from '@/composables'

const props = defineProps<{
  timeCells: string[]
  visibleTableCells: Omit<Table, 'orders' | 'reservations'>[]
}>()

interface SelectionPoint {
  startTime: string
  endTime: string
  table: string
}

const isDragging = ref(false)

const pointA = ref<SelectionPoint | null>(null)

const pointB = ref<SelectionPoint | null>(null)

const selectionArea = computed(() => {
  if (!pointA.value) return

  const startTimes = [pointA.value.startTime, pointB.value?.startTime].filter(
    (t): t is string => !!t,
  )
  const endTimes = [pointA.value.endTime, pointB.value?.endTime].filter((t): t is string => !!t)

  const startTime = getMinTimeStr(startTimes)
  const endTime = getMaxTimeStr(endTimes)
  const duration = getTimeDuration(startTime, endTime)

  const aIndex = props.visibleTableCells.findIndex((table) => table.id === pointA.value?.table)
  const bIndexRaw = pointB.value
    ? props.visibleTableCells.findIndex((table) => table.id === pointB.value?.table)
    : -1
  const bIndex = bIndexRaw === -1 ? aIndex : bIndexRaw

  const start = Math.min(bIndex, aIndex)
  const end = Math.max(bIndex, aIndex)

  const tablesData = props.visibleTableCells.slice(start, end + 1)
  const tableIds = tablesData.map((table) => table.id)

  return {
    startTime,
    endTime,
    duration,
    tablesNumbers: tablesData.map((table) => table.number),
    tablesCapacity: tablesData.reduce((acc, table) => (acc += table.capacity), 0),
    tableIds,
    startTable: tableIds[0],
    endTable: tableIds.at(-1),
  }
})

const startDragging = (table: string, startTime: string, endTime: string) => {
  isDragging.value = true

  pointA.value = { table, startTime, endTime }
}

const dragging = (table: string, startTime: string, endTime: string) => {
  if (!isDragging.value) return

  pointB.value = { table, startTime, endTime }
}

const endDragging = () => {
  isDragging.value = false
}

const tableWrapperRef = ref<HTMLDivElement | null>(null)
const overlayStyle = computed(() => {
  if (!selectionArea.value || !tableWrapperRef.value) {
    return { display: 'none' }
  }

  const wrapperRect = tableWrapperRef.value.getBoundingClientRect()

  const startEl = tableWrapperRef.value.querySelector(
    `[data-table-id="${selectionArea.value.startTable}"][data-time-start="${selectionArea.value.startTime}"]`,
  )
  const endEl = tableWrapperRef.value.querySelector(
    `[data-table-id="${selectionArea.value.endTable}"][data-time-end="${selectionArea.value.endTime}"]`,
  )

  if (!startEl || !endEl) return { display: 'none' }

  const rectStart = startEl.getBoundingClientRect()
  const rectEnd = endEl.getBoundingClientRect()

  const top = rectStart.top - wrapperRect.top + tableWrapperRef.value.scrollTop
  const left = rectStart.left - wrapperRect.left + tableWrapperRef.value.scrollLeft
  const bottom = rectEnd.bottom - wrapperRect.top + tableWrapperRef.value.scrollTop
  const right = rectEnd.right - wrapperRect.left + tableWrapperRef.value.scrollLeft

  return {
    position: 'absolute',
    top: `${top}px`,
    left: `${left}px`,
    width: `${right - left}px`,
    height: `${bottom - top}px`,
    pointerEvents: isDragging.value ? 'none' : 'auto',
  }
})

const clearSelection = () => {
  pointA.value = null
  pointB.value = null
}

onMounted(() => window.addEventListener('mouseup', endDragging))
onUnmounted(() => window.removeEventListener('mouseup', endDragging))
</script>

<template>
  <div class="table-wrapper" ref="tableWrapperRef">
    <table class="table" v-show="props.visibleTableCells.length">
      <thead>
        <tr>
          <th></th>
          <header-cell
            v-for="table in props.visibleTableCells"
            :key="table.id"
            :cell-data="table"
          />
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in props.timeCells" :key="time">
          <td class="table__time-cell">{{ time }}</td>

          <table-cell
            v-for="table in props.visibleTableCells"
            :key="table.id"
            :time="time"
            :table-id="table.id"
            class="table__cell"
            @start-select="startDragging"
            @select="dragging"
            @end-select="endDragging"
          />
        </tr>
      </tbody>
    </table>
    <div v-if="selectionArea" class="table-wrapper__selection-overlay" :style="overlayStyle">
      <!--      TODO: убрать после создания формы-->
      <div class="overlay-body">
        <button class="overlay-body__btn" @click="clearSelection">Закрыть</button>
        <pre>
          {{ selectionArea }}
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$border-style: 1px solid var(--color-table-border);

.table-wrapper {
  overflow: auto;
  height: 100%;
  width: 100%;
  position: relative;

  &__selection-overlay {
    background-color: var(--color-table-overlay-bg);
    border: 1px solid var(--color-table-overlay-border);
    border-radius: 4px;
  }
}

// TODO: убрать после создания формы
.overlay-body {
  padding: 12px;
  display: flex;
  flex-direction: column;

  pre {
    pointer-events: none;
  }

  &__btn {
    background-color: var(--color-blue);
    padding: 4px;
    margin-left: auto;
  }
}

.table {
  border-spacing: 0;
  border-collapse: separate;
  table-layout: fixed;

  font-size: var(--size-font-small);
  line-height: var(--size-line-height-small);

  tbody tr:last-child &__cell {
    border-bottom: $border-style;
  }

  &__time-cell {
    vertical-align: top;
    padding-inline: 2px;

    height: var(--size-cell-height);
    color: var(--color-table-time-text);
  }
}
</style>
