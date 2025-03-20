import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { DEFAULT_MAX_ITEMS, DEFAULT_PAGE } from '@/shared/constants/api';
import { BASE_API_URL, TAG_TYPES } from './config';
import { IFetchParams } from './types';
import { buildQueryParams } from '@/shared/lib/utils/buildQueryParams';

export const potterApi = createApi({
  reducerPath: 'potterApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  tagTypes: TAG_TYPES,
  endpoints: (builder) => ({
    getResource: builder.query({
      query: ({
        resource,
        lang = 'en',
        search = '',
        random,
        page = DEFAULT_PAGE,
        max = DEFAULT_MAX_ITEMS,
      }: IFetchParams) => {
        const basePath = `/${lang}/${resource}`;
        if (random) return `${basePath}/random`;

        const queryParams = buildQueryParams({ search, page, max });

        return `${basePath}?${queryParams}`;
      },
    }),
  }),
});

export const { useGetResourceQuery } = potterApi;
