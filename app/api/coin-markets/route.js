import { NextResponse } from 'next/server';
import { BASE_COINGECKO_API_PATH, LOCALIZATION } from '#/app/constants/global';

// Get all coin markets
// GET /api/coin-markets
export async function GET(req) {
  const { searchParams } = req.nextUrl;

  const vs_currency = searchParams.get('vs_currency');
  const per_page = searchParams.get('per_page');

  // Fetch data
  const res = await fetch(
    `${BASE_COINGECKO_API_PATH}?vs_currency=${vs_currency}&order=market_cap_desc&per_page=${per_page}&locale=${LOCALIZATION}}`
  );

  const data = await res.json();

  // Return NextResponse
  return NextResponse.json({
    status: res.status,
    results: data,
    count: data.length,
  });
}
