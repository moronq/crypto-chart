import React from 'react'

import { useChart } from './hooks/useChart'

import styles from './Chart.module.css'

interface ChartProps {
  constants: {
    activeCoin: CoinInfo | null
    chart: Array<Histohour> | null
    lastRequest: RequestsIntervalType
  }
}

export const Chart: React.FC<ChartProps> = ({ constants }) => {
  const ref = React.useRef(null)
  const { titles } = useChart({ constants, ref })

  return (
    <div className={styles.chart_container}>
      <h2 className={styles.chart_title}>{`${constants.activeCoin?.symbol || '-'} in ${
        titles[constants.lastRequest]
      }`}</h2>
      <div className={styles.chart_wrapper} id='d3'>
        <svg ref={ref} />
      </div>
    </div>
  )
}
