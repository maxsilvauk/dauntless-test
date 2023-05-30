'use client'

import { useQuery } from 'react-query'
import { AxiosResponse } from 'axios'
import coinService from '@/services/CoinService'
import { ICurrency } from './types'
import { Coin } from '@/components/Coin'
import { Loader } from '@/components/Loader'
import { IHome, TRateLimitExceeded, ICoin } from 'app/types'

const Currency: React.FC<ICurrency> = ({ params: { symbol } }) => {
  // const [rateLimitExceeded, setRateLimitExceeded] = useState<TRateLimitExceeded>(false)

  /*
    Here is the code where I would compare the param passed against the coins id within the AppContext store,
    however the 'ath' property is not available in the respoonse from the endpoint /coins. The test requires for 
    the endpoint '/coins/markets' which does contain the 'ath' property however when I use this endpoint I get a 
    429 error (rate limit exceeded), almost immediately so I conditionally check for the 'ath' property so you 
    wouldnt have to create a new call if the user came from the home page. So now every load of this page there is
    a new call :_(
  */

  // const { coins } = useAppContext()
  // const [coin, setCoin] = useState<ICoin | {}>({})

  // useEffect(() => {
  //   // If the coins array is not empty, find the coin that matches the symbol
  //   if (coins.length > 0) {
  //     coins[0].find((coin) => coin.id === symbol[0] && setCoin(coin)) && setCoin(coin)
  //   }
  // }, [coins, symbol, coin])

  // Fetch the coin using useQuery from Axios.
  const getCoin = coinService.getCoin(symbol) as Promise<AxiosResponse>
  const { isLoading, data } = useQuery<AxiosResponse>('getCoin', () => getCoin)

  console.log('data', data)

  return (
    <>
      <section className='container mx-auto max-w-md items-center justify-center px-6 py-10'>{isLoading ? <Loader /> : <Coin data={data.data} />}</section>
    </>
  )
}

export default Currency
