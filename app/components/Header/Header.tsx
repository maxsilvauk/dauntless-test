'use client'

const Header: React.FC = () => {
  return (
    <header className='bg-white pb-6 pt-8'>
      <div className='container mx-auto max-w-sm px-4 sm:px-6 lg:px-8'>
        <h1 className='mb-4 text-center text-4xl font-bold text-gray-900'>
          Market Pairs (USD)
        </h1>
        <p className='text-center text-xl text-gray-600'>
          The following is a list of crypto currencies with information related
          to the USD trading pair.
        </p>
      </div>
    </header>
  )
}

export default Header
