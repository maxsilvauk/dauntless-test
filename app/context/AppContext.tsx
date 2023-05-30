import { createContext, useContext } from 'react'
import { IAppContext } from './types'

export const AppContext = createContext<IAppContext>({
  coins: [],
  addCoins() {},
})

export const useAppContext = () => useContext(AppContext)
