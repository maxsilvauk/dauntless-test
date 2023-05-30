export interface IParams {
  params: {
    symbol: string
  }
}

export interface ICoinGeckoGetCoinResponse {
  result: {
    name: string
    market_data: any
  }
}
