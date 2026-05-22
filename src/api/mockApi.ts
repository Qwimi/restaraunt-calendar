import { mockData } from './mockData'
import type { Booking, Order, OrderCreateRequest } from '@/types'

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms))

export const mockApi = {
  async apiGetBookingData(): Promise<Booking> {
    await delay()
    return structuredClone(mockData)
  },

  async createOrder(orderData: OrderCreateRequest): Promise<Order> {
    await delay()

    const { table_id, ...order } = orderData

    return { ...order, id: crypto.randomUUID() }
  },
}
