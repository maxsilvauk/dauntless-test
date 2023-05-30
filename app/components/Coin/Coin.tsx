import Link from 'next/link'
import Image from 'next/image'
import { ICoin } from './types'
import { ChartPieIcon, TrophyIcon, ArrowRightIcon, ArrowTrendingUpIcon } from '@heroicons/react/20/solid'

const Coin: React.FC<ICoin> = ({ data: { image, name, market_data } }) => {
  return (
    <div className='mx-auto grid-cols-1 text-center'>
      <Image src={image.large} alt='placeholder' width={100} height={100} className='mx-auto justify-center object-center' />
      <h2 className='mb-2 text-xl font-semibold'>{name}</h2>
      <ul className='list-disc pl-5'>
        <li className='list-none'>
          <ArrowRightIcon className='mb-0.5 mr-2 inline-block h-3 w-3 text-green-500 group-hover:text-white' />
          Current Price: &#x24;
          {market_data.current_price.usd}
        </li>
        <li className='list-none'>
          <TrophyIcon className='mb-0.5 mr-2 inline-block h-3 w-3 text-green-500' />
          All Time High Price: &#x24;{market_data.ath.usd}
        </li>
        <li className='list-none'>
          <ChartPieIcon className='mb-0.5 mr-2 inline-block h-3 w-3 text-green-500' />
          Market Cap: &#x24;{market_data.market_cap.usd}
        </li>
        <li className='list-none'>
          <ArrowTrendingUpIcon className='mb-0.5 ml-0.5 mr-2 inline-block h-3 w-3 text-green-500' />
          Market Cap Rank: {market_data.market_cap_rank}
        </li>
      </ul>
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
