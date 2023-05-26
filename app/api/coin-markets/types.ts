export interface IRequest {
  nextUrl: URL
  searchParams: URLSearchParams
}

export interface ICoinGeckoGetCoinMarketsResponse {
  status: number
  results: any[]
  count: number
}
