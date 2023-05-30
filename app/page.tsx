'use client'

import { useState } from 'react'
import { useQuery } from 'react-query'
import { AxiosResponse } from 'axios'
import coinService from '@/services/CoinService'
import { useAppContext } from '@/context/AppContext'
import { Loader } from '@/components/Loader'
import { Alert } from '@/components/Alert'
import { CoinCard } from '@/components/CoinCard'
import { IHome, TRateLimitExceeded, ICoin } from './types'

const Home: React.FC<IHome> = () => {
  const { coins, addCoins } = useAppContext()
  const getCoins = coinService.getCoinMarkets() as Promise<AxiosResponse>
  const [rateLimitExceeded, setRateLimitExceeded] = useState<TRateLimitExceeded>(false)

  // Fetch the coins using useQuery from Axios.
  const { isLoading, data } = useQuery<AxiosResponse>('getCoins', () => getCoins, {
    refetchOnWindowFocus: false,
    // If the request is successful, add the coins to the AppContext or
    // set the rate limit exceeded state to true.
    onSuccess: (data) => {
      !data.data.status ? addCoins(data.data) : setRateLimitExceeded(true)
    },
  })

  // Display list of coins or show exceeded rate limit error message.
  const display = () => {
    if (data && !rateLimitExceeded) {
      return data.data.map((coin: ICoin) => <CoinCard key={coin.id} data={coin} />)
    }
  }

  return (
    <>
      <section className='container mx-auto items-center justify-center px-6 py-10'>
        {rateLimitExceeded && <Alert type='error' body={`${data.data.status.error_message} - Retry in 2 minutes, Thanks!`} open={rateLimitExceeded} />}
        <div className='grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>{isLoading ? <Loader /> : display()}</div>
      </section>
    </>
  )
}

export default Home
