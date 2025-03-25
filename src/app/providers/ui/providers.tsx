import { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

import { store } from '@/app/store/store';
import { FallBack } from '@/shared/ui/fallback/FallBack';

interface IProviders {
  readonly children: ReactNode;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ErrorBoundary fallback={<FallBack />}>
      <Provider store={store}>
        {children}
        <ToastContainer />
      </Provider>
    </ErrorBoundary>
  );
};
