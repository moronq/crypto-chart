import React, { RefObject } from 'react'

import { requestCoinList } from '@utils/api'
import { objectToArray } from '@utils/helpers'
import { useOnClickOutside } from '@utils/hooks/useOnClickOutside'

interface UseSelectProps {
  setActiveCoin: React.Dispatch<React.SetStateAction<CoinInfo | null>>
  coinListRef: RefObject<HTMLDivElement>
}

export const useSelect = ({ setActiveCoin, coinListRef }: UseSelectProps) => {
  const [active, setActive] = React.useState(false)
  const [coinList, setCoinList] = React.useState<null | CoinInfo[]>(null)

  useOnClickOutside(coinListRef, () => setActive(false))

  React.useEffect(() => {
    requestCoinList().then((res) => setCoinList(objectToArray(res.data.Data) as CoinInfo[]))
  }, [])

  React.useEffect(() => {
    setActiveCoin(coinList && coinList[0])
  }, [coinList])

  const onSelectHandler = (coin: CoinInfo) => {
    setActiveCoin(coin)
    setActive(false)
  }
  const onClickHandler = () => setActive(!active)

  return { coinListRef, active, coinList, onClickHandler, onSelectHandler }
}
