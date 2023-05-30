export interface ICoinCard {
  data: {
    id: string
    symbol: string
    image: {
      large: string
      small: string
      thumb: string
    }
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
  }
}
