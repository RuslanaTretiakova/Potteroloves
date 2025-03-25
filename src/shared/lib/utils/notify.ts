import { toast } from 'react-toastify';

interface INotifyOptions {
  message: string;
  type?: 'error' | 'info';
  position?: 'bottom-left' | 'top-right' | 'top-left' | 'bottom-right';
}

export const notify = ({
  message,
  type = 'error',
  position = 'bottom-right',
}: INotifyOptions) => {
  switch (type) {
    case 'error':
      toast.error(message, { position });
      break;
    case 'info':
    default:
      toast.info(message, { position });
      break;
  }
};
