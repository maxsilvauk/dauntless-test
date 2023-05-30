import { IAlert, AlertType } from './types'
import { InformationCircleIcon, CheckCircleIcon, ShieldExclamationIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'

const Alert: React.FC<IAlert> = ({ type, body, open }) => {
  // Alert type icon switch
  const typeIcon = (type: AlertType) => {
    switch (type) {
      case 'warning':
        return <ShieldExclamationIcon className='mr-2 h-6 w-6 shrink-0 fill-current opacity-90' />
      case 'error':
        return <ExclamationTriangleIcon className='mr-2 h-6 w-6 shrink-0 fill-current opacity-90' />
      case 'success':
        return <CheckCircleIcon className='mr-2 h-6 w-6 shrink-0 fill-current opacity-90' />
      default:
        return <InformationCircleIcon className='mr-2 h-6 w-6 shrink-0 fill-current opacity-90' />
    }
  }

  // Alert bg color switch
  const typeColor = (type: AlertType) => {
    switch (type) {
      case 'warning':
        return 'bg-amber-500'
      case 'error':
        return 'bg-rose-500 border-red-400 border-4'
      case 'success':
        return '0'
      default:
        return 'bg-amber-500'
    }
  }

  return (
    <>
      {open && (
        <div className={`rounded-sm p-8 text-base text-white ${typeColor(type)}`}>
          <div className='flex w-full items-start justify-between rounded-sm bg-black/10'>
            <div className='flex'>
              <div className='inline-block max-w-full rounded-sm p-4 align-middle font-medium'>
                <p className='mr-2 inline-block font-bold'>
                  <span className='mb-0.5 inline-block align-middle'>{typeIcon(type)}</span>
                  {body}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Alert
