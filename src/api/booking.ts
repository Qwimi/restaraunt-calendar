import { isMockMode } from '@/api/config.ts'
import type { Booking, Order, OrderCreateRequest } from '@/types'
import { axiosInstance } from '@/api/instance.ts'
import { mockApi } from '@/api/mockApi.ts'

interface IBookingApi {
  apiGetBookingData(): Promise<Booking>
  createOrder(orderData: OrderCreateRequest): Promise<Order>
}

const realApi: IBookingApi = {
  apiGetBookingData(): Promise<Booking> {
    return axiosInstance.get('booking')
  },
  createOrder(orderData): Promise<Order> {
    return axiosInstance.post('order', orderData)
  },
}

export const bookingApi: IBookingApi = {
  apiGetBookingData() {
    return isMockMode.value ? mockApi.apiGetBookingData() : realApi.apiGetBookingData()
  },
  createOrder(orderData) {
    return isMockMode.value ? mockApi.createOrder(orderData) : realApi.createOrder(orderData)
  },
}
