import { ICoin } from 'app/types'
export interface IRequest {
  nextUrl: URL
  searchParams: URLSearchParams
}

export type TCoinGeckoGetCoinMarketsResponse = Array<ICoin>
