import { useBookingStore } from '@/stores/booking.ts'
import { storeToRefs } from 'pinia'
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue'
import { TIMESTEP } from '@/types'

export const parseStringToDate = (str: string) => {
  const [hours, minutes] = str.split(':').map(Number)
  const date = new Date()
  date.setHours(hours!, minutes, 0, 0)
  return date
}

export const parseFullDateTimeString = (str: string): Date => {
  const [datePart, timePart] = str.split(', ')

  const [day, month, year] = datePart!.split('.').map(Number)

  const [hours, minutes, seconds] = timePart!.split(':').map(Number)

  return new Date(year!, month! - 1, day, hours, minutes, seconds)
}


export const formatDateToString = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

export const addMinutesToDate = (date: Date, minutes: number): Date => {
  date.setMinutes(date.getMinutes() + minutes)

  return date
}

export const roundUpToStep = (date: Date, step: number): Date => {
  const remainder = date.getMinutes() % step

  if (remainder !== 0) {
    date.setMinutes(date.getMinutes() + (step - remainder))
  }
  return date
}

export const getMinTimeStr = (timeStrings: string[]): string => {
  if (!timeStrings.length) return ''

  const minDate = timeStrings
    .map(parseStringToDate)
    .reduce((min, current) => (current < min ? current : min))

  return formatDateToString(minDate)
}

export const getMaxTimeStr = (timeStrings: string[]): string => {
  if (!timeStrings.length) return ''

  const maxDate = timeStrings
    .map(parseStringToDate)
    .reduce((max, current) => (current > max ? current : max))

  return formatDateToString(maxDate)
}

export const getTimeDuration = (timeStrA: string, timeStrB: string): string => {
  if (!timeStrA || !timeStrB) return ''

  const dateA = parseStringToDate(timeStrA)
  const dateB = parseStringToDate(timeStrB)

  const diffMs = Math.abs(dateB.getTime() - dateA.getTime())
  const totalMinutes = Math.floor(diffMs / (1000 * 60))

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours > 0) {
    return minutes > 0 ? `${hours}ч ${minutes}м` : `${hours}ч`
  }

  return `${minutes}м`
}


export const useTableCoords = (tableWrapperRef: Ref<HTMLDivElement | null>) => {
  const bookingStore = useBookingStore()

  const { currentTime, current_day, selectedDate } = storeToRefs(bookingStore)

  const tableWidth = ref(0)
  let resizeObserver: ResizeObserver | null = null

  onMounted(() => {
    if (!tableWrapperRef.value) return

    const tableEl = tableWrapperRef.value.querySelector('.table')

    if (tableEl) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          tableWidth.value = entry.target.scrollWidth
        }
      })
      resizeObserver.observe(tableEl)
    }
  })

  onUnmounted(() => {
    if (resizeObserver) resizeObserver.disconnect()
  })

  const currentTimeY = computed(() => {
    if (
      selectedDate.value !== current_day.value ||
      !tableWrapperRef.value ||
      !currentTime.value
    ) {
      return null
    }
    const tableRect = tableWrapperRef.value.getBoundingClientRect()

    const now = parseFullDateTimeString(currentTime.value)
    const roundedUpDate = roundUpToStep(new Date(now.getTime()), TIMESTEP.HALF)
    const targetTimeEndStr = formatDateToString(roundedUpDate)

    const targetCellEl = tableWrapperRef.value.querySelector(
      `[data-time-end="${targetTimeEndStr}"]`,
    ) as HTMLElement

    if (!targetCellEl) return null

    const cellRect = targetCellEl.getBoundingClientRect()

    const minutesToSlotEnd = Math.floor((roundedUpDate.getTime() - now.getTime() )/ (1000 * 60))

    const pixelOffsetFromCellBottom = (minutesToSlotEnd / TIMESTEP.HALF) * cellRect.height

    const cellBottomRelative = cellRect.bottom - pixelOffsetFromCellBottom - tableRect.top + tableWrapperRef.value.scrollTop

    return {
      y: cellBottomRelative,
      width: tableWidth.value,
    }
  })

  return { currentTimeY }
}
