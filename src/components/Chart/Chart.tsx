import React from 'react'

import { useChart } from './hooks/useChart'

import styles from './Chart.module.css'

interface ChartProps {
  activeCoin: CoinInfo | null
  chart: Array<Histohour> | null
  interval: RequestsIntervalType
}

export const Chart: React.FC<ChartProps> = ({ activeCoin, chart, interval }) => {
  const ref = React.useRef(null)
  const { titles } = useChart({ activeCoin, chart, ref })

  return (
    <div className={styles.chart_container}>
      <h2 className={styles.chart_title}>{`${activeCoin?.symbol || '-'} in ${
        titles[interval]
      }`}</h2>
      <div className={styles.chart_wrapper} id='d3'>
        <svg ref={ref} />
      </div>
    </div>
  )
}
