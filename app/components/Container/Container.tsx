import clsx from 'clsx';

const baseStyles = {
  default: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  auth: 'max-w-[600px] border-8 border-black p-20 bg-white',
};

interface IContainerProps {
  className?: string;
  variant?: 'default' | 'auth';
}

const Container: React.FC<IContainerProps> = ({ className, ...props }) => {
  return <div className={clsx(baseStyles[variant], className)} {...props} />;
};

export default Container;
