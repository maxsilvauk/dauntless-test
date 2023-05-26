export interface IHome {
  coins: ICoins
}
export interface ICoinData {
  id: string
  image: {
    large: string
  }
  symbol: string
  market_data: {
    current_price: {
      usd: number
    }
    high_24h: {
      usd: number
    }
    low_24h: {
      usd: number
    }
  }
  localization: {
    en: string
  }
}

export interface ICoins {
  loading: boolean
  data: Array<ICoinData> | null
}
