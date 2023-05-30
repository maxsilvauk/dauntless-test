'use client'

const Header: React.FC = () => {
  return (
    <header className='pb-6 pt-8 text-center text-white dark:bg-gray-900'>
      <div className='container mx-auto max-w-md px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-bold'>Market Pairs (USD)</h1>
        <p className='px-6 py-4 text-lg text-gray-500'>The following is a list of crypto currencies with information related to the USD trading pair.</p>
      </div>
    </header>
  )
}

export default Header
