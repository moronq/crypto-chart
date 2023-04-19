import React from 'react'

import { Button } from '@common'

import styles from './PeriodSelector.module.css'

interface PeriodSelectorProps {
  functions: {
    onDayClick: () => void
    onThreeDayClick: () => void
    onWeekClick: () => void
    onMonthClick: () => void
  }
}

export const PeriodSelector: React.FC<PeriodSelectorProps> = ({ functions }) => (
  <div className={styles.period_selector_container}>
    <Button onClick={functions.onDayClick}>Day</Button>
    <Button onClick={functions.onThreeDayClick}>3 Days</Button>
    <Button onClick={functions.onWeekClick}>Week</Button>
    <Button onClick={functions.onMonthClick}>Month</Button>
  </div>
)
