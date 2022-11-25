import React from 'react'

import { Button } from '@common/buttons'

import { useSelect } from './hooks/useSelect'

import styles from './Select.module.css'

interface SelectProps {
  activeCoin: CoinInfo | null
  setActiveCoin: React.Dispatch<React.SetStateAction<CoinInfo | null>>
}

export const Select: React.FC<SelectProps> = ({ activeCoin, setActiveCoin }) => {
  const coinListRef = React.useRef<HTMLDivElement>(null)

  const { active, coinList, onClickHandler, onSelectHandler } = useSelect({
    setActiveCoin,
    coinListRef
  })

  return (
    <div ref={coinListRef} className={styles.select_container}>
      <Button onClick={onClickHandler}>
        <div className={`${styles.select_icon_container} ${active ? styles.active : ''}`} />
        {activeCoin?.symbol || '-'}
      </Button>

      <ul className={`${styles.coin_list_container} ${active ? styles.active : ''}`}>
        {coinList &&
          coinList.map((coin) => (
            <li
              className={styles.coin_list_item}
              key={coin.id}
              aria-hidden
              onClick={() => onSelectHandler(coin)}
            >
              {coin.symbol}
            </li>
          ))}
      </ul>
    </div>
  )
}
