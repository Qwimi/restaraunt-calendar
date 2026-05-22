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
  status: string
}

export interface OrderCreateRequest extends Omit<Order, 'id'> {
  table_id: Table['id']
}

export interface Reservation {
  end_time: string
  id: number
  name_for_reservation: string
  num_people: number
  phone_number: string
  seating_time: string
  status: string
}
