import { api } from '@utils/api/instance'

export const requestExchangeHistohour = (tsym: string, limit: number, aggregate: number) =>
  api.get<RequestExchange>(`exchange/histohour`, {
    params: {
      tsym,
      limit,
      aggregate,
      api_key: '1e896ce93e5cef31925b7fe2f38cf8039ef68d46e21b0dbbf80b4cfbe36cd3e3'
    }
  })

export const requestOneDayExchange = (tsym: string) => requestExchangeHistohour(tsym, 24, 1) // 24 intervals with 1 hour length
export const requestThreeDayExchange = (tsym: string) => requestExchangeHistohour(tsym, 24, 3) // 24 intervals with 3 hour length
