import Link from 'next/link'
import { ICoin } from './types'

const Coin: React.FC<ICoin> = ({ data: { name, market_data } }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex-1 p-4'>
        <h2 className='mb-2 text-xl font-semibold'>{name}</h2>
        <ul className='list-disc pl-5'>
          <li>
            Current Price: &#x24;
            {market_data.current_price.usd}
          </li>
          <li>All Time High Price: &#x24;{market_data.ath.usd}</li>
          <li>Market Cap: {market_data.market_cap.usd}</li>
          <li>Market Cap Rank: {market_data.market_cap_rank}</li>
        </ul>
      </div>
      <div className='p-4'>
        <Link
          className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          href={{
            pathname: `/`,
          }}
        >
          Back
        </Link>
      </div>
    </div>
  )
}

export default Coin
