import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { ArrowDownTrayIcon, CloudArrowDownIcon } from '@heroicons/react/20/solid'

const Loader: React.FC = () => {
  return (
    <Transition
      show={true}
      enter='transition duration-100 ease-out'
      enterFrom='transform scale-95 opacity-0'
      enterTo='transform scale-100 opacity-100'
      leave='transition duration-75 ease-out'
      leaveFrom='transform scale-100 opacity-100'
      leaveTo='transform scale-95 opacity-0'
      as='div'
    >
      <>
        <div className='fixed inset-0 bg-black/95' aria-hidden='true' />
        <div className='fixed inset-0 z-10 flex items-center justify-center'>
          <div className='justify-center p-4 text-center'>
            <ArrowDownTrayIcon className='mx-auto mb-4 block h-32 w-32 animate-pulse text-emerald-500' />
            <p className='text-lg'>
              Retrieving data from <span className='text-emerald-500'>coingecko...</span>
            </p>
          </div>
        </div>
      </>
    </Transition>
  )
}

export default Loader
