import Image from 'next/image'
import Link from 'next/link'
import { ICoinCard } from './types'

const CoinCard: React.FC<ICoinCard> = ({
  data: { id, image, market_data, localization },
}) => {
  return (
    <div className='flex flex-col'>
      <Image
        src={image.large}
        alt='placeholder'
        width={200}
        height={200}
        className='object-cover object-center'
      />
      <div className='flex-1 p-4'>
        <h2 className='mb-2 text-xl font-semibold'>
          {localization.en as string}
        </h2>
        <ul className='list-disc pl-5'>
          <li>
            Current Price: &#x24;
            {market_data.current_price.usd}
          </li>
          <li>24h High: &#x24;{market_data.high_24h.usd}</li>
          <li>24h Low: &#x24;{market_data.low_24h.usd}</li>
        </ul>
      </div>
      <div className='p-4'>
        <Link
          className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          href={{
            pathname: `/currency/${id}`,
          }}
        >
          More
        </Link>
      </div>
    </div>
  )
}

export default CoinCard
