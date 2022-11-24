import React from 'react'

import { Button } from '@common/buttons'
import { Chart, PeriodSelector } from '@components'

import styles from './Table.module.css'

export const Table: React.FC = () => {
  console.log('asd')
  return (
    <div className={styles.table_container}>
      <div className={styles.period_selector_container}>
        <PeriodSelector />
        <Button>Refresh</Button>
        <Button>BTC</Button>
      </div>
      <div>
        <Chart />
      </div>
    </div>
  )
}
