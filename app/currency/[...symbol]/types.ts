export interface ICurrency {
  params: {
    symbol: string
  }
}

export interface ICoinData {
  loading: boolean
  data: Array<[]> | null
}
