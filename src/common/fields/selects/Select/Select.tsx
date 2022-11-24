import React from 'react'

import { Button } from '@common/buttons'
import { useOnClickOutside } from '@utils/hooks'

import styles from './Select.module.css'

interface SelectProps {
  coinList: CoinInfo[] | null
  activeCoin: CoinInfo | null
  setActiveCoin: React.Dispatch<React.SetStateAction<CoinInfo | null>>
}

export const Select: React.FC<SelectProps> = ({ activeCoin, setActiveCoin, coinList }) => {
  const [active, setActive] = React.useState(false)

  const coinListRef = React.useRef(null)

  useOnClickOutside(coinListRef, () => setActive(false))

  const onSelectHandler = (coin: CoinInfo) => {
    setActiveCoin(coin)
    setActive(false)
  }
  const onClickHandler = () => setActive(!active)

  const showedCoin = (activeCoin && activeCoin.symbol) || (coinList && coinList[0].symbol) || '-'

  return (
    <div ref={coinListRef} className={styles.select_container}>
      <Button onClick={onClickHandler}>
        <div className={`${styles.select_icon_container} ${active ? styles.active : ''}`} />
        {showedCoin}
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
