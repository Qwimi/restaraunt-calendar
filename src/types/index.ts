export interface Booking {
  available_days: string[]
  current_day: string
  restaurant: Restaurant
  tables: Table[]
}

export interface Restaurant {
  closing_time: string
  id: number
  opening_time: string
  restaurant_name: string
  timezone: string
}

export interface Table {
  capacity: number
  id: string
  number: string
  orders: Order[]
  reservations: Reservation[]
  zone: string
}

export interface Order {
  end_time: string
  id: string
  start_time: string
  status: 'New' | 'Bill' | 'Closed' | 'Banquet'
}

export interface OrderCreateRequest {
  tableIds: Table['id'][]
  startTime: string
  endTime: string
}

export interface Reservation {
  end_time: string
  id: number
  name_for_reservation: string
  num_people: number
  phone_number: string
  seating_time: string
  status: 'Живая очередь' | 'Новая' | 'Заявка' | 'Открыт' | 'Закрыт'
}

export type TableEvent<T = Order | Reservation> = T & {
  tableId: Table['id']
  start_time: string
  end_time: string
  type: 'order' | 'banquet' | 'waiting-guests' | 'reservation'
}

export type PositionedEvent<T = Order | Reservation> = TableEvent<T> & {
  column: number
  columnsCount: number
  level: number
}

export enum TIMESTEP {
  FULL = 30,
  HALF = 15
}
