import { requestExchange } from '../histoday'

export const requestOneDayExchange = (tsym: string) => requestExchange('histohour', tsym, 24, 1) // 24 intervals with 1 hour length
export const requestThreeDayExchange = (tsym: string) => requestExchange('histohour', tsym, 24, 3) // 24 intervals with 3 hour length
