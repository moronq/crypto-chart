import React from 'react'

import { Table } from '@components'

import { requestCoinList } from './utils/api'
import { objectToArray } from './utils/helpers'

import './App.css'

const App = () => {
  const [coinList, setCoinList] = React.useState<null | CoinInfo[]>(null)

  React.useEffect(() => {
    requestCoinList().then((res) => setCoinList(objectToArray(res.data.Data) as CoinInfo[]))
  }, [])

  console.log(coinList)
  return (
    <div className='App'>
      <main className='app_container'>
        <Table />
      </main>
    </div>
  )
}

export default App
