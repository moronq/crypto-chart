import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
