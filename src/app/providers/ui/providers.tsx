import { FC, ReactNode } from 'react';
import { store } from '@/app/store/store';

import { Provider } from 'react-redux';

interface IProviders {
  readonly children: ReactNode;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
