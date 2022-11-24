import React from 'react'

import { Button } from '@common/buttons'

import styles from './PeriodSelector.module.css'

export const PeriodSelector: React.FC = () => (
  <div className={styles.period_selector_container}>
    <Button>Day</Button>
    <Button>3 Days</Button>
    <Button>Week</Button>
    <Button>Month</Button>
  </div>
)
