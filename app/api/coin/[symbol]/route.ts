import { NextResponse } from 'next/server'
import { BASE_COINGECKO_API_PATH } from '#/app/constants/global'
import { IParams, ICoinGeckoGetCoinResponse } from './types'
import { NextApiRequest } from 'next'

// Get coin by symbol
// GET /api/coin/[symbol]
export async function GET(
  req: NextApiRequest,
  { params: { symbol } }: IParams
) {
  // Fetch data
  const res = (await fetch(`${BASE_COINGECKO_API_PATH}${symbol}`)) as Response
  const data: Object = (await res.json()) as Object

  // Return NextResponse
  return NextResponse.json({
    status: res.status,
    result: data,
  } as ICoinGeckoGetCoinResponse)
}
