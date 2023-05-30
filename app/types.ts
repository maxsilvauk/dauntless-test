import { ReactNode } from 'react'

export type TRateLimitExceeded = boolean

export interface IRootLayout {
  children: ReactNode
}

export interface IHome {
  coins: ICoins
}
export interface ICoin {
  id: string
  symbol: string
  name: string
  block_time_in_minutes: string
  image: {
    thumb: string
    small: string
    large: string
  }
  market_data: Object
  last_updated: string
  localization: Object
}

export interface ICoins {
  loading: boolean
  data: Array<ICoin> | null
}
