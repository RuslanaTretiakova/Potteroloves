import { DEFAULT_MAX_ITEMS, DEFAULT_PAGE } from '@/shared/constants/api';
import { IFetchParams } from './types';
import { buildQueryParams } from '@/shared/lib/utils/buildQueryParams';

export const buildResourceQuery = ({
  resource,
  lang = 'en',
  search = '',
  random,
  page = DEFAULT_PAGE,
  max = DEFAULT_MAX_ITEMS,
}: IFetchParams): string => {
  const basePath = `/${lang}/${resource}`;
  if (random) return `${basePath}/random`;

  const queryParams = buildQueryParams({ search, page, max });

  return `${basePath}?${queryParams}`;
};
