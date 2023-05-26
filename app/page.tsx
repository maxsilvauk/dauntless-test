'use client'

import { useEffect, useState, Fragment } from 'react'
import coinService from '@/services/CoinService'
import { CoinCard } from '@/components/CoinCard'
import { Loader } from '@/components/Loader'
import { IHome, ICoinData, ICoins } from './types'

const Home: React.FC<IHome> = () => {
  const [coins, setCoins] = useState<ICoins>({ loading: false, data: null })

  // Get the coin market data on page load.
  useEffect(() => {
    const getCoins = async () => {
      // Set the loading state to true.
      setCoins({ loading: true, data: null })
      let res = await coinService.getCoinMarkets()

      // If the response was successful, set the coin data.
      if (res.status === 200) {
        setCoins({ loading: false, data: res.data.results })
      } else {
        // If the response was not successful, set the error message.
        setCoins({ loading: false, data: null })
      }
    }

    getCoins()
  }, [])

  return (
    <>
      <section className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {coins.loading && <Loader />}
          {coins.data &&
            coins.data.map((coin: ICoinData) => (
              <Fragment key={coin.id}>
                <CoinCard data={coin} />
              </Fragment>
            ))}
        </div>
      </section>
    </>
  )
}

export default Home
