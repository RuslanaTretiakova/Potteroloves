import {
  BaseQueryFn,
  fetchBaseQuery,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { BASE_API_URL } from './config';
import { handleError } from '@/shared/lib/utils/handleError';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_API_URL });

export const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const errorMessage = handleError(result.error);

    if (result.error.status === 500) {
      throw new Error(errorMessage);
    }

    return { error: result.error };
  }

  return result;
};
