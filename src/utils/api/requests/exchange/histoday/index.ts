import { api } from '@utils/api/instance'

export const requestExchangeHistoday = (tsym: string, limit: number, aggregate: number) =>
  api.get<RequestExchange>(`exchange/histoday`, {
    params: {
      tsym,
      limit,
      aggregate,
      api_key: '1e896ce93e5cef31925b7fe2f38cf8039ef68d46e21b0dbbf80b4cfbe36cd3e3'
    }
  })

export const requestOneWeekExchange = (tsym: string) => requestExchangeHistoday(tsym, 7, 1) // 7 intervals with 1 day length
export const requestOneMonthExchange = (tsym: string) => requestExchangeHistoday(tsym, 30, 1) // 30 intervals with 1 hour length
