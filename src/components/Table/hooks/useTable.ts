import { useCallback, useEffect, useMemo, useState } from 'react'

import {
  requestOneDayExchange,
  requestOneMonthExchange,
  requestOneWeekExchange,
  requestThreeDayExchange
} from '@utils/api'

export const useTable = () => {
  const [activeCoin, setActiveCoin] = useState<null | CoinInfo>(null)
  const [chart, setChart] = useState<Array<Histohour> | null>(null)
  const [lastRequest, setLastRequest] = useState<RequestsIntervalType>('month')

  const regularRequest = useCallback(
    (activeCoin: CoinInfo | null, callback: () => void, title: RequestsIntervalType) => {
      if (activeCoin) {
        callback()
        setLastRequest(title)
      }
    },
    [activeCoin]
  )

  useEffect(() => {
    if (activeCoin) {
      requestOneMonthExchange(activeCoin?.symbol).then((res) => setChart(res.data.Data))
      setLastRequest(lastRequest || 'month')
    }
  }, [activeCoin])

  const requests: Record<RequestsIntervalType, () => void> = useMemo(
    () => ({
      day: () =>
        regularRequest(
          activeCoin,
          () =>
            requestOneDayExchange(activeCoin ? activeCoin.symbol : '').then((res) =>
              setChart(res.data.Data)
            ),
          'day'
        ),
      threeDays: () =>
        regularRequest(
          activeCoin,
          () =>
            requestThreeDayExchange(activeCoin ? activeCoin.symbol : '').then((res) =>
              setChart(res.data.Data)
            ),
          'threeDays'
        ),
      month: () =>
        regularRequest(
          activeCoin,
          () =>
            requestOneMonthExchange(activeCoin ? activeCoin.symbol : '').then((res) =>
              setChart(res.data.Data)
            ),
          'month'
        ),
      week: () =>
        regularRequest(
          activeCoin,
          () =>
            requestOneWeekExchange(activeCoin ? activeCoin.symbol : '').then((res) =>
              setChart(res.data.Data)
            ),
          'week'
        )
    }),
    [activeCoin]
  )

  const onDayClick = () => requests.day()
  const onMonthClick = () => requests.month()
  const onThreeDayClick = () => requests.threeDays()
  const onWeekClick = () => requests.week()

  const onRefreshClick = () => {
    if (lastRequest) {
      requests[lastRequest]()
    }
  }
  return {
    functions: {
      onDayClick,
      onMonthClick,
      onThreeDayClick,
      onWeekClick,
      onRefreshClick,
      setActiveCoin
    },
    constants: { activeCoin, chart, lastRequest }
  }
}
