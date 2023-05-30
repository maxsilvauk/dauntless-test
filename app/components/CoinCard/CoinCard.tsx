import Image from 'next/image'
import Link from 'next/link'
import { ICoinCard } from './types'
import { ArrowRightIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/20/solid'

const CoinCard: React.FC<ICoinCard> = ({ data: { id, image, market_data } }) => {
  return (
    <div className='mb-0.5 cursor-pointer rounded-md border-2 border-gray-900 bg-gray-800 p-6 px-10 hover:border-2 hover:border-gray-700 hover:bg-gray-900 lg:flex'>
      <div className='flex items-center justify-center text-xs lg:mx-6 lg:text-sm'>
        <Image src={image.large} alt='placeholder' width={100} height={100} className='object-center' />
        <ul className='list-disc pl-5'>
          <li className='list-none'>
            <ArrowRightIcon className='mb-0.5 ml-0.5 mr-2 inline-block h-3 w-3 text-amber-500' />
            <span className='font-semibold'>Current Price:</span> &#x24;
            {market_data.current_price.usd}
          </li>
          <li className='list-none'>
            <span className='font-semibold'>
              <ArrowTrendingUpIcon className='mb-0.5 ml-0.5 mr-2 inline-block h-3 w-3 text-green-500' />
              24h High:
            </span>
            &#x24;
            {market_data.high_24h.usd}
          </li>
          <li className='list-none'>
            <ArrowTrendingDownIcon className='mb-0.5 ml-0.5 mr-2 inline-block h-3 w-3 text-red-500' />
            <span className='font-semibold'>24h Low:</span> &#x24;{market_data.low_24h.usd}
          </li>
          <li className='mt-4 list-none'>
            <Link
              className='rounded border-2 border-gray-900 bg-gray-800 p-1 px-2 font-semibold text-white hover:bg-gray-700 group-hover:text-white'
              href={{
                pathname: `/currency/${id}`,
              }}
            >
              More
              <ArrowRightIcon className='mb-0.5 ml-0.5 inline-block h-3 w-3 text-white' />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CoinCard
