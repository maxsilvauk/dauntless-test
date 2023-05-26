import clsx from 'clsx'
import { Transition } from '@headlessui/react'
import { CloudArrowDownIcon } from '@heroicons/react/20/solid'

interface ILoader {
  className?: string
}

const Loader: React.FC<ILoader> = ({ className }) => {
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
        <div
          className={clsx('fixed inset-0 z-30 bg-black/95', className)}
          aria-hidden='true'
        />
        <div className='fixed inset-0 z-40 flex items-center justify-center p-4 text-center text-white'>
          <CloudArrowDownIcon className='block h-32 w-32 animate-pulse' />
        </div>
      </>
    </Transition>
  )
}

export default Loader
