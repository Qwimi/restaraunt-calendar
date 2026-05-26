<script setup lang="ts">
import type { PositionedEvent, Table } from '@/types'
import HeaderCell from '@/components/table/header-cell.vue'
import TableCell from '@/components/table/table-cell.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import {
  getMaxTimeStr,
  getMinTimeStr,
  getFormatedTimeDuration,
  useTableCoords,
  getMinutesFromStartOfDay,
} from '@/composables'
import CurrentTime from '@/components/table/current-time.vue'
import EventItem from '@/components/table/event-item.vue'
import { useVirtualizer } from '@tanstack/vue-virtual'

const props = defineProps<{
  timeCells: string[]
  visibleTableCells: Omit<Table, 'orders' | 'reservations'>[]
  events: PositionedEvent[]
}>()

interface SelectionPoint {
  startTime: string
  endTime: string
  table: string
  zone: string
}

const isDragging = ref(false)

const pointA = ref<SelectionPoint | null>(null)

const pointB = ref<SelectionPoint | null>(null)

const selectionArea = computed(() => {
  if (!pointA.value || !pointB.value) return

  const startTime = getMinTimeStr([pointA.value.startTime, pointB.value.startTime])
  const endTime = getMaxTimeStr([pointA.value.endTime, pointB.value?.endTime])
  const duration = getFormatedTimeDuration(startTime, endTime)

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
    tablesCapacity: tablesData.reduce((acc, table) => acc + table.capacity, 0),
    tableIds,
    startTable: tableIds[0],
    endTable: tableIds.at(-1),
  }
})

const validPointBTable = (table: string, zone: string) => {
  if (pointA.value!.zone === zone) {
    return { table, zone }
  }
  // не даем забронировать стол в другой зоне
  const aIndex = props.visibleTableCells.findIndex((table) => table.id === pointA.value!.table)
  const currentIndex = props.visibleTableCells.findIndex((tableCell) => tableCell.id === table)

  const isMovingForward = currentIndex > aIndex

  const aZoneTables = props.visibleTableCells.filter((t) => t.zone === pointA.value!.zone)

  const boundaryTable = isMovingForward ? aZoneTables.at(-1) : aZoneTables[0]

  return {
    table: boundaryTable!.id,
    zone: pointA.value!.zone,
  }
}

const startDragging = (table: string, startTime: string, endTime: string, zone: string) => {
  isDragging.value = true

  // задаем стартовую точку только если ее еще нет(т.е. в начале нового выделения)
  if (!pointA.value) {
    pointA.value = { table, startTime, endTime, zone }
  }

  pointB.value = { startTime, endTime, ...validPointBTable(table, zone) }
}

const dragging = (table: string, startTime: string, endTime: string, zone: string) => {
  if (!isDragging.value) return

  pointB.value = { startTime, endTime, ...validPointBTable(table, zone) }
}

const endDragging = () => {
  isDragging.value = false
}

const tableWrapperRef = ref<HTMLDivElement | null>(null)
const { currentTimeY, getPositionStyle } = useTableCoords(tableWrapperRef)

// Виртуализация строк
const rowVirtualizerOptions = computed(() => {
  return {
    count: props.timeCells.length,
    getScrollElement: () => tableWrapperRef.value,
    estimateSize: () => 40,
    overscan: 3,
  }
})

const rowVirtualizer = useVirtualizer(rowVirtualizerOptions)

const virtualRows = computed(() => rowVirtualizer.value.getVirtualItems())

// Виртуализация колонок
const colVirtualizerOptions = computed(() => {
  return {
    count: props.visibleTableCells.length,
    horizontal: true,
    getScrollElement: () => tableWrapperRef.value,
    estimateSize: () => 80,
    overscan: 5,
  }
})

const colVirtualizer = useVirtualizer(colVirtualizerOptions)

const virtualCols = computed(() => colVirtualizer.value.getVirtualItems())

const paddingLeft = computed(() => virtualCols.value[0]?.start ?? 0)
const paddingRight = computed(() => {
  if (!virtualCols.value.length) return 0
  return colVirtualizer.value.getTotalSize() - virtualCols.value[virtualCols.value.length - 1]!.end
})

const overlayStyle = computed(() => {
  if (!selectionArea.value) {
    return { display: 'none' }
  }

  return {
    ...getPositionStyle(
      selectionArea.value.startTime,
      selectionArea.value.endTime,
      selectionArea.value.startTable!,
      selectionArea.value.endTable!,
    ),
    pointerEvents: isDragging.value ? 'none' : 'auto',
  }
})

const clearSelection = () => {
  pointA.value = null
  pointB.value = null
}

onMounted(() => window.addEventListener('mouseup', endDragging))
onUnmounted(() => window.removeEventListener('mouseup', endDragging))

const visibleTableIds = computed(() => {
  return new Set(virtualCols.value.map((col) => props.visibleTableCells[col.index]!.id))
})

const visibleTimeRange = computed(() => {
  if (!virtualRows.value.length) return null

  const first = virtualRows.value[0]
  const last = virtualRows.value.at(-1)

  return {
    start: getMinutesFromStartOfDay(props.timeCells[first!.index]!),
    end: getMinutesFromStartOfDay(props.timeCells[last!.index]!),
  }
})

const visibleEvents = computed(() => {
  if (!visibleTimeRange.value) return []

  const { start, end } = visibleTimeRange.value

  return props.events.filter((event) => {
    const tableVisible = visibleTableIds.value.has(event.tableId)

    const timeVisible =
      getMinutesFromStartOfDay(event.end_time) > start ||
      getMinutesFromStartOfDay(event.start_time) < end

    return tableVisible && timeVisible
  })
})
</script>

<template>
  <div class="table-wrapper" ref="tableWrapperRef">
    <table class="table" v-show="props.visibleTableCells.length">
      <thead>
        <tr>
          <th class="table__time-header-cell"></th>

          <th
            v-if="paddingLeft > 0"
            :style="{ width: `${paddingLeft}px` }"
            style="padding: 0; border: none"
          ></th>

          <header-cell
            v-for="virtualCol in virtualCols"
            :key="virtualCol.index"
            :cell-data="props.visibleTableCells[virtualCol.index]!"
            :style="{ width: `${virtualCol.size}px` }"
          />

          <th
            v-if="paddingRight > 0"
            :style="{ width: `${paddingRight}px` }"
            style="padding: 0; border: none"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in props.timeCells" :key="time">
          <td class="table__time-cell">
            {{ time }}
          </td>

          <td
            v-if="paddingLeft > 0"
            :style="{ width: `${paddingLeft}px` }"
            style="padding: 0; border: none"
          ></td>

          <table-cell
            v-for="virtualCol in virtualCols"
            :key="virtualCol.index"
            :time="time"
            :table-id="props.visibleTableCells[virtualCol.index]!.id"
            :zone="props.visibleTableCells[virtualCol.index]!.zone"
            class="table__cell"
            :style="{ width: `${virtualCol.size}px` }"
            @start-select="startDragging"
            @select="dragging"
            @end-select="endDragging"
          />

          <td
            v-if="paddingRight > 0"
            :style="{ width: `${paddingRight}px` }"
            style="padding: 0; border: none"
          ></td>
        </tr>
      </tbody>
    </table>
    <current-time v-if="currentTimeY" :y="currentTimeY.y" :width="currentTimeY.width" />
    <div v-if="selectionArea" class="table-wrapper__selection-overlay" :style="overlayStyle">
      <!--      TODO: убрать после создания формы-->
      <div class="overlay-body">
        <button class="overlay-body__btn" @click="clearSelection">Закрыть</button>
        <pre>
          {{ selectionArea }}
        </pre>
      </div>
    </div>
    <event-item
      v-for="event in visibleEvents"
      :key="event.id"
      :event="event"
      :is-dragging="isDragging"
      :position-style-func="getPositionStyle"
    />
  </div>
</template>

<style scoped lang="scss">
$border-style: 1px solid var(--color-table-border);

.table-wrapper {
  overflow: auto;
  min-width: 0;
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
  display: table;
  width: max-content;

  thead {
    position: sticky;
    top: 0;
    background-color: var(--color-page-bg);
    z-index: 101;
  }

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
    position: sticky;
    left: 0;
    z-index: 1;
  }
}
</style>
