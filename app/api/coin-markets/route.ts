import { NextResponse } from 'next/server'
import { BASE_COINGECKO_API_PATH, LOCALIZATION } from '#/app/constants/global'
import { IRequest, TCoinGeckoGetCoinMarketsResponse } from './types'

// Get all coin markets
// GET /api/coin-markets
export async function GET(req: IRequest) {
  const { searchParams: searchParams } = new URL(req.nextUrl)

  const vs_currency = searchParams.get('vs_currency') as string | null
  const per_page = searchParams.get('per_page') as string | null

  // Fetch data
  const res = (await fetch(`${BASE_COINGECKO_API_PATH}?vs_currency=${vs_currency}&order=market_cap_desc&per_page=${per_page}&locale=${LOCALIZATION}}`)) as Response
  const data = (await res.json()) as Object

  // Return NextResponse
  return NextResponse.json(data as TCoinGeckoGetCoinMarketsResponse)
}
