import React from 'react'

import { Button, Select } from '@common'
import { Chart, PeriodSelector } from '@components'
import {
  requestOneDayExchange,
  requestOneMonthExchange,
  requestOneWeekExchange,
  requestThreeDayExchange
} from '@utils/api'

import styles from './Table.module.css'

type RequestsType = 'day' | 'month' | 'threeDays' | 'week'

export const Table: React.FC = () => {
  const [activeCoin, setActiveCoin] = React.useState<null | CoinInfo>(null)
  const [chart, setChart] = React.useState<Array<Histohour> | null>(null)
  const [lastRequest, setLastRequest] = React.useState<null | RequestsType>(null)

  React.useEffect(() => {
    if (activeCoin) {
      requestOneMonthExchange(activeCoin?.symbol).then((res) => setChart(res.data.Data))
      setLastRequest('month')
    }
  }, [activeCoin])

  const regularRequest = (
    activeCoin: CoinInfo | null,
    callback: () => void,
    title: RequestsType
  ) => {
    if (activeCoin) {
      callback()
      setLastRequest(title)
    }
  }

  const requests: Record<RequestsType, () => void> = {
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
  }

  const onDayClick = () => requests.day()
  const onMonthClick = () => requests.month()
  const onThreeDayClick = () => requests.threeDays()
  const onWeekClick = () => requests.week()

  const onRefreshClick = () => {
    if (lastRequest) {
      requests[lastRequest]()
    }
  }

  return (
    <div className={styles.table_container}>
      <div className={styles.period_selector_container}>
        <PeriodSelector
          onDayClick={onDayClick}
          onMonthClick={onMonthClick}
          onThreeDayClick={onThreeDayClick}
          onWeekClick={onWeekClick}
        />
        <Button onClick={onRefreshClick}>Refresh</Button>
        <div className={styles.select_container}>
          <Select activeCoin={activeCoin} setActiveCoin={setActiveCoin} />
        </div>
      </div>
      <div>
        <Chart activeCoin={activeCoin} chart={chart} />
      </div>
    </div>
  )
}
