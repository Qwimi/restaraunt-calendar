import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Booking, Restaurant, Table } from '@/types'
import { bookingApi } from '@/api/booking.ts'
import {
  addMinutesToDate,
  formatDateToString,
  parseStringToDate,
  roundUpToStep,
} from '@/composables'

export const useBookingStore = defineStore('booking', () => {
  const available_days = ref<Booking['available_days']>([])
  const current_day = ref<Booking['current_day']>('')
  const restaurant = ref<Restaurant>({} as Restaurant)
  const tables = ref<Table[]>([])

  const selectedDate = ref('')

  const STEP = 30

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

    roundUpToStep(end, STEP)

    while (start <= end) {
      result.push(formatDateToString(start))

      addMinutesToDate(start, STEP)
    }

    return result
  })

  const zones = computed(() => Array.from(new Set(tables.value.map((table) => table.zone))))
  const selectedZones = ref<Table['zone'][]>([])

  const visibleData = computed(() =>
    tables.value
      .filter((table) => selectedZones.value.includes(table.zone))
  )

  const visibleTableCells = computed(() =>
    visibleData.value.map(({ id, capacity, number, zone }) => ({ id, capacity, number, zone })),
  )

  const visibleOrders = computed(() =>
    visibleData.value.flatMap(({ orders }) =>
      orders.filter((order) => order.start_time.startsWith(selectedDate.value)),
    )
  )

  const visibleReservation = computed(() =>
    visibleData.value.flatMap(({ reservations }) =>
      reservations.filter((reservation) => reservation.seating_time.startsWith(selectedDate.value)),
    ),
  )

  const currentTime = ref<string>()
  let timeIntervalId: ReturnType<typeof setInterval> | null = null

  const updateCurrentTime = () => {
    if (!current_day.value || !restaurant.value?.timezone) return

    currentTime.value = new Date(
      `${current_day.value}T${new Date().toTimeString().split(' ')[0]}`,
    ).toLocaleString('ru-RU', {
      timeZone: restaurant.value.timezone,
    })
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
  }
})
