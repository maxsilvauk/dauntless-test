import React, { useState } from 'react'
import { AppContext } from './AppContext'
import { IAppContextProvider } from './types'

interface ICoin {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  roi: null
  last_updated: string
}

const AppContextProvider = ({ children }: IAppContextProvider) => {
  const [coins, setCoins] = useState<ICoin[]>([])
  const addCoins = (coin: ICoin) => {
    setCoins([...coins, coin])
  }

  return <AppContext.Provider value={{ coins, addCoins }}>{children}</AppContext.Provider>
}

export default AppContextProvider
