'use client'

import { useEffect, useState } from 'react'
import coinService from '#/app/services/CoinService'
import { Coin } from '@/components/Coin'
import { Loader } from '@/components/Loader'
import { ICurrency, ICoinData } from './types'

const Currency: React.FC<ICurrency> = ({ params }) => {
  const [coin, setCoin] = useState<ICoinData>({ loading: false, data: null })

  // Get the coin data on page load.
  useEffect(() => {
    const getCoin = async () => {
      // Set the loading state to true.
      setCoin({ loading: true, data: null })
      let res = await coinService.getCoin(params.symbol)

      // If the response was successful, set the coin data.
      if (res.status === 200) {
        setCoin({ loading: false, data: res.data.result })
      } else {
        // If the response was not successful
        setCoin({ loading: false, data: null })
      }
    }

    getCoin()
  }, [params.symbol])

  return (
    <>
      <section className='container mx-auto flex flex-col items-center px-4 py-8 sm:px-6 lg:px-8'>
        {coin.loading && <Loader />}
        {/* 
// @ts-ignore */}
        {coin.data && <Coin data={coin.data} />}
      </section>
    </>
  )
}

export default Currency
