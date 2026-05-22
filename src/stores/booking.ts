import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Booking, Restaurant, Table } from '@/types'
import { bookingApi } from '@/api/booking.ts'

export const useBookingStore = defineStore('booking', () => {
  const available_days = ref<Booking['available_days']>([])
  const current_day = ref<Booking['current_day']>('')
  const restaurant = ref<Restaurant>()
  const tables = ref<Table[]>([])

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

    startTimeUpdates()

    return data
  }

  return { getBookingData, available_days, current_day, restaurant, tables, currentTime }
})
