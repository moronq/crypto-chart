import React from 'react'

import { Button, Select } from '@common'
import { Chart, PeriodSelector } from '@components'
import { requestCoinList } from '@utils/api'
import { objectToArray } from '@utils/helpers'

import styles from './Table.module.css'

export const Table: React.FC = () => {
  const [coinList, setCoinList] = React.useState<null | CoinInfo[]>(null)
  const [activeCoin, setActiveCoin] = React.useState<null | CoinInfo>(
    coinList?.length ? coinList[0] : null
  )

  React.useEffect(() => {
    requestCoinList()
      .then((res) => setCoinList(objectToArray(res.data.Data) as CoinInfo[]))
      .then((res) => setActiveCoin(coinList?.length ? coinList[0] : null))
  }, [])

  return (
    <div className={styles.table_container}>
      <div className={styles.period_selector_container}>
        <PeriodSelector />
        <Button>Refresh</Button>
        <div className={styles.select_container}>
          <Select coinList={coinList} activeCoin={activeCoin} setActiveCoin={setActiveCoin} />
        </div>
      </div>
      <div>
        <Chart />
      </div>
    </div>
  )
}
