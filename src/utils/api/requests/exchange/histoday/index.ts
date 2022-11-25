import { api } from '@utils/api/instance'

export const requestExchange = (link: string, tsym: string, limit: number, aggregate: number) =>
  api.get<RequestExchange>(`exchange/${link}`, {
    params: {
      tsym,
      limit,
      aggregate,
      api_key: '1e896ce93e5cef31925b7fe2f38cf8039ef68d46e21b0dbbf80b4cfbe36cd3e3'
    }
  })

export const requestOneWeekExchange = (tsym: string) => requestExchange('histoday', tsym, 7, 1) // 7 intervals with 1 day length
export const requestOneMonthExchange = (tsym: string) => requestExchange('histoday', tsym, 30, 1) // 30 intervals with 1 hour length
