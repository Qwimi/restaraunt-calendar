import axios, { type AxiosInstance } from 'axios'

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    headers: {
      Accept: 'application/json',
    },
  })
}

export const axiosInstance = createAxiosInstance()
