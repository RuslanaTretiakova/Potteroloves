import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { toast } from 'react-toastify';

export const handleError = (error: FetchBaseQueryError) => {
  let errorMessage: string = 'An unknown error occurred. Please try again.';

  if (
    'data' in error &&
    typeof error.data === 'object' &&
    error.data !== null
  ) {
    const dataError = error.data as { message?: string };
    errorMessage = dataError?.message || errorMessage;
  }

  if ('text' in error && typeof error.text === 'string') {
    errorMessage = error.text;
  }

  if (!error.status) errorMessage = 'Network error. Please try again later.';
  if (error.status === 404) errorMessage = 'Resource not found.';

  if (typeof error.status === 'number' && error.status >= 500) {
    errorMessage = 'Server error. Please try again later.';
  }

  toast.error(errorMessage);

  return errorMessage;
};
