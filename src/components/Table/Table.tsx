import React from 'react'

import { Button, Select } from '@common'
import { Chart, PeriodSelector } from '@components'

import { useTable } from './hooks/useTable'

import styles from './Table.module.css'

export const Table: React.FC = () => {
  const { constants, functions } = useTable()

  return (
    <div className={styles.table_container}>
      <div className={styles.period_selector_container}>
        <PeriodSelector
          onDayClick={functions.onDayClick}
          onMonthClick={functions.onMonthClick}
          onThreeDayClick={functions.onThreeDayClick}
          onWeekClick={functions.onWeekClick}
        />
        <Button onClick={functions.onRefreshClick}>Refresh</Button>
        <div className={styles.select_container}>
          <Select activeCoin={constants.activeCoin} setActiveCoin={functions.setActiveCoin} />
        </div>
      </div>
      <div className={styles.chart_container}>
        {constants.lastRequest && constants.chart && constants.chart.length ? (
          <Chart
            activeCoin={constants.activeCoin}
            chart={constants.chart}
            interval={constants.lastRequest}
          />
        ) : (
          <div className={styles.chart_no_data}>There is no data for this coin</div>
        )}
      </div>
    </div>
  )
}
