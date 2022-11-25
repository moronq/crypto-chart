import React from 'react'

import { convertTime } from '@utils/helpers'

interface ChartProps {
  activeCoin: CoinInfo | null
  chart: Array<Histohour> | null
}

export const Chart: React.FC<ChartProps> = ({ activeCoin, chart }) => (
  <div>
    {chart?.length &&
      chart.map((el) => <div key={el.time}>{new Date(convertTime(el.time)).toString()}</div>)}
  </div>
)
