import { ReactNode } from 'react'

export interface IAppContextProvider {
  children: ReactNode
}

export interface IAppContext {
  coins: Array<[]>
  addCoins: (coin: any[]) => void
}
