import { createApi } from '@reduxjs/toolkit/query/react';

import { TAG_TYPES } from './config';
import { IFetchParams } from './types';
import { customBaseQuery } from './customBaseQuery';
import { buildResourceQuery } from './buildResourceQuery';

export const potterApi = createApi({
  reducerPath: 'potterApi',
  baseQuery: customBaseQuery,
  tagTypes: TAG_TYPES,
  endpoints: (builder) => ({
    getResource: builder.query({
      query: (params: IFetchParams) => buildResourceQuery(params),
    }),
  }),
});

export const { useGetResourceQuery } = potterApi;
