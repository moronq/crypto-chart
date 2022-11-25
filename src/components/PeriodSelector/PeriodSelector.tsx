import React from 'react'

import { Button } from '@common/buttons'

import styles from './PeriodSelector.module.css'

interface PeriodSelectorProps {
  onDayClick: () => void
  onThreeDayClick: () => void
  onWeekClick: () => void
  onMonthClick: () => void
}

export const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  onDayClick,
  onThreeDayClick,
  onWeekClick,
  onMonthClick
}) => {
  const onDayClickHandler = () => onDayClick()
  const onThreeDayClickHandler = () => onThreeDayClick()
  const onWeekClickHandler = () => onWeekClick()
  const onMonthClickHandler = () => onMonthClick()
  return (
    <div className={styles.period_selector_container}>
      <Button onClick={onDayClickHandler}>Day</Button>
      <Button onClick={onThreeDayClickHandler}>3 Days</Button>
      <Button onClick={onWeekClickHandler}>Week</Button>
      <Button onClick={onMonthClickHandler}>Month</Button>
    </div>
  )
}
