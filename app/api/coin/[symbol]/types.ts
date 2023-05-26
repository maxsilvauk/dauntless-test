export interface IParams {
  params: {
    symbol: string
  }
}

export interface ICoinGeckoGetCoinResponse {
  status: number
  result: {
    name: string
    market_data: any
  }
}
