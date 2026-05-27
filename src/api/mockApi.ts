import { mockData } from './mockData'
import type { Booking, OrderCreateRequest } from '@/types'

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms))

export const mockApi = {
  async apiGetBookingData(): Promise<{ data: Booking }> {
    await delay()
    return { data: structuredClone(mockData) as Booking }
  },

  async createOrder(orderData: OrderCreateRequest) {
    console.log('заказ создается...')
    await delay(1000)

    console.log('создан заказ')
    console.log(orderData)
  },
}
