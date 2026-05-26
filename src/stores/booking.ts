import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import {
  type Booking,
  type Restaurant,
  type Table,
  type TableEvent,
  type TableOrder,
  type TableReservation,
  TIMESTEP,
} from '@/types'
import { bookingApi } from '@/api/booking.ts'
import {
  addMinutesToDate,
  formatByTimezone,
  formatDateToString,
  getMinutesFromStartOfDay,
  parseStringToDate,
  roundUpToStep,
} from '@/composables'

export const useBookingStore = defineStore('booking', () => {
  const available_days = ref<Booking['available_days']>([])
  const current_day = ref<Booking['current_day']>('')
  const restaurant = ref<Restaurant>({} as Restaurant)
  const tables = ref<Table[]>([])

  const selectedDate = ref('')

  const visibleTimeCells = computed(() => {
    if (!restaurant.value.opening_time || !restaurant.value.closing_time) {
      return []
    }

    const result: string[] = []

    const start = parseStringToDate(restaurant.value.opening_time)

    const end = parseStringToDate(restaurant.value.closing_time)

    if (end <= start) {
      end.setDate(end.getDate() + 1)
    }

    roundUpToStep(end, TIMESTEP.FULL)

    while (start <= end) {
      result.push(formatDateToString(start))

      addMinutesToDate(start, TIMESTEP.FULL)
    }

    return result
  })

  const zones = computed(() => Array.from(new Set(tables.value.map((table) => table.zone))))
  const selectedZones = ref<Table['zone'][]>([])

  const visibleData = computed(() =>
    tables.value.filter((table) => selectedZones.value.includes(table.zone)),
  )

  const visibleTableCells = computed(() =>
    visibleData.value.map(({ id, capacity, number, zone }) => ({ id, capacity, number, zone })),
  )

  const visibleOrders = computed<TableOrder[]>(() =>
    visibleData.value.flatMap(({ orders, id }) =>
      orders
        .filter((order) => order.start_time.startsWith(selectedDate.value))
        .map((order) => ({
          ...order,
          tableId: id,
          start_time: formatByTimezone(order.start_time, restaurant.value.timezone),
          end_time: formatByTimezone(order.end_time, restaurant.value.timezone),
        })),
    ),
  )

  const visibleReservation = computed<TableReservation[]>(() =>
    visibleData.value.flatMap(({ reservations, id }) =>
      reservations
        .filter((reservation) => reservation.seating_time.startsWith(selectedDate.value))
        .map((reservation) => ({ ...reservation, tableId: id,
          start_time: formatByTimezone(reservation.seating_time, restaurant.value.timezone),
          end_time: formatByTimezone(reservation.end_time, restaurant.value.timezone), })),
    ),
  )

  const visibleEvents = computed<TableEvent[]>(() => {
    const combined = [...visibleOrders.value, ...visibleReservation.value]

    return combined.sort((a, b) => {
      const startA = getMinutesFromStartOfDay(a.start_time)
      const startB = getMinutesFromStartOfDay(b.start_time)

      if (startA !== startB) {
        return startA - startB
      }

      const durationA = getMinutesFromStartOfDay(a.end_time) - startA
      const durationB = getMinutesFromStartOfDay(b.end_time) - startB

      return durationB - durationA
    })
  })

  const currentTime = ref<string>()
  let timeIntervalId: ReturnType<typeof setInterval> | null = null

  const updateCurrentTime = () => {
    if (!current_day.value || !restaurant.value?.timezone) return

    currentTime.value = formatByTimezone(
      `${current_day.value}T${new Date().toTimeString().split(' ')[0]}`,
      restaurant.value.timezone,
    )
  }

  const stopTimeUpdates = () => {
    if (timeIntervalId) {
      clearInterval(timeIntervalId)
      timeIntervalId = null
    }
  }

  const startTimeUpdates = () => {
    stopTimeUpdates()
    updateCurrentTime()
    timeIntervalId = setInterval(updateCurrentTime, 60000)
  }

  const getBookingData = async () => {
    const data = await bookingApi.apiGetBookingData()
    available_days.value = data.available_days
    current_day.value = data.current_day
    restaurant.value = data.restaurant
    tables.value = data.tables

    selectedDate.value = current_day.value

    startTimeUpdates()

    return data
  }

  return {
    getBookingData,
    available_days,
    current_day,
    restaurant,
    tables,
    currentTime,
    selectedDate,
    zones,
    selectedZones,
    visibleData,
    visibleOrders,
    visibleReservation,
    visibleTableCells,
    visibleTimeCells,
    visibleEvents,
  }
})
