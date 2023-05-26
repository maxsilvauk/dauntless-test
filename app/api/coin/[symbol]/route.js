import { NextResponse } from 'next/server'
import { BASE_COINGECKO_API_PATH } from '#/app/constants/global'

// Get coin by symbol
// GET /api/coin/[symbol]
export async function GET(req, { params: { symbol } }) {
  // Fetch data
  const res = await fetch(`${BASE_COINGECKO_API_PATH}${symbol}`)

  const data = await res.json()

  // Return NextResponse
  return NextResponse.json({
    status: res.status,
    result: data,
  })
}
