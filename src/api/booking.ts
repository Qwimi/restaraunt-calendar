import { isMockMode } from '@/api/config.ts'
import type { Booking, Order, OrderCreateRequest } from '@/types'
import { axiosInstance } from '@/api/instance.ts'
import { mockApi } from '@/api/mockApi.ts'

interface IBookingApi {
  apiGetBookingData(): Promise<{ data: Booking }>
  createOrder(orderData: OrderCreateRequest): Promise<{ data: Order } | void>
}

const realApi: IBookingApi = {
  apiGetBookingData() {
    return axiosInstance.get('booking')
  },
  createOrder(orderData)  {
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
